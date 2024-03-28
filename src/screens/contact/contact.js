import React, { useEffect, useState } from 'react';
import Spinner from '../../utils/spinner';
import { SliderCorousel } from '../../components/carousel/carousel';
import { Box, Grid, InputAdornment } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';
import { ReusableInputfield } from '../../components/input/input';
import ReusableButton from '../../components/button/button';
import NavigationIcon from '@mui/icons-material/Navigation';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import { API } from '../../Networking/API';
import { Banner } from '../../components/swiper/swiper';
import Person4Icon from '@mui/icons-material/Person4';

import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

const Contact = () => {

    const [loadSpinner, setLoadSpinner] = useState(false);
    const [bannerData, setBannerData] = useState([]);

    const contact = [
        { id: 1, label: "call us", phone: "1 800 915 6270", tel: "1 514 733 2010", icon: <CallIcon className='contact_box-icon' /> },
        { id: 2, label: "Our Location", phone: "7415 Transcanadienne, Suite 100 St.", tel: "Laurent, Quebec, Canada H45T 1Z22", icon: <LocationOnIcon className='contact_box-icon' /> },
        { id: 3, label: "Email", phone: "surose@gmail.com", tel: "info@surose.com", icon: <EmailIcon className='contact_box-icon' /> }];

    const validateSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone Number is required"),
        subject: Yup.string().required("Subject is required"),
        message: Yup.string().required("Message is required")
    });


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",

        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            feedbackApi(values, resetForm);
        },
    });

    useEffect(() => {
        fetchBanner();
    }, [])

    const fetchBanner = () => {
        setLoadSpinner(true);
        const category_name = 'contact'
        API.getBannerData(category_name).then(({ response }) => {
            console.log(response, "respose of getBannerData in shop data")
            if (response.success) {
                setBannerData(response.data[0]);
            }
            setLoadSpinner(false);
        })
    }

    const feedbackApi = (values, resetForm) => {
        const { name, email, phone, subject, message } = values;

        console.log(values, "values we're getting?")
        setLoadSpinner(true);

        API.postFeedback(name, email, phone, subject, message).then(({ response }) => {
            console.log(response, "posted the feeebacksssss");
            if (response.success) {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
            } else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
            }
            resetForm();
            setLoadSpinner(false);
        })

    }

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    //Contact-feature
    const [refFeatures, inViewFeatures] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.1, // Percentage of element visibility required to trigger the animation
    });

    const springPropsTwo = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewFeatures ? 1 : 0, transform: inViewFeatures ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 750 },
    });


    //Contact-Message
    const [refMessage, inViewMessage] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });

    const springPropsMessage = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewMessage ? 1 : 0, transform: inViewMessage ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 750 },
        delay: 400
    });

    //Contact-Form
    const [refForm, inViewForm] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });

    const springPropsForm = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewForm ? 1 : 0, transform: inViewForm ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 750 },
        delay: 600
    });

    return (
        <div>

            {loadSpinner ? <Spinner /> : bannerData?.carouselImages?.length > 0 ? <Box>
                <Banner bannerData={bannerData} bannerImages={bannerData.carouselImages} />
            </Box> : null}

            <Box sx={{ margin: "30px" }}>
                <Box className="contact_cards mt-5">
                    <animated.div ref={refFeatures} style={springPropsTwo}>
                        <Grid container spacing={2}>
                            {contact.map((items, index) => (
                                <Grid item xs={12} md={5.6} lg={3.8} sx={{ padding: "0px" }} className='contact_us-box'>
                                    {items.icon}
                                    <span className='contact_mainText'>{items.label}</span>
                                    <span className='contact_subText'>{items.phone}</span>
                                    <span className='contact_subText'>{items.tel}</span>
                                </Grid>
                            ))}
                        </Grid>
                    </animated.div>
                </Box>

                <animated.div className="content_box" ref={refMessage} style={springPropsMessage}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <span className='send_msg-text'>SEND US A MESSAGE</span>
                        <span className='send_msg-subText'>You can contact us for any of your requirements. We’ll help you meet your needs.</span>
                    </Box>
                </animated.div>

                {loadSpinner ? <Spinner /> :

                    <animated.div className="contact_form" style={springPropsForm} ref={refForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={0} md={2} lg={2}></Grid>

                            <Grid item xs={0} md={8} lg={8}>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={6} lg={6} sx={{ margin: "5px 0px" }}>
                                            <label className='label_text'>Name</label>
                                            <ReusableInputfield
                                                type="text"
                                                className="contact_input-fields"
                                                placeholder="Your name here"
                                                size="small"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                style={{ width: "100%" }}
                                                id="name"
                                                name="name"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
                                                    </InputAdornment>
                                                }
                                                error={formik.errors.name ? true : false}
                                                helperText={formik.errors.name ? formik.errors.name : ""}
                                            />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6} sx={{ margin: "5px 0px" }}>
                                            <label className='label_text'>Email</label>
                                            <ReusableInputfield
                                                type="email"
                                                className="contact_input-fields"
                                                placeholder="Your email here"
                                                size="small"
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                style={{ width: "100%" }}
                                                id="email"
                                                name="email"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
                                                    </InputAdornment>
                                                }
                                                error={formik.errors.email ? true : false}
                                                helperText={formik.errors.email ? formik.errors.email : ""}

                                            />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6} sx={{ margin: "5px 0px" }}>
                                            <label className='label_text'>Phone</label>
                                            <ReusableInputfield
                                                type="number"
                                                className="contact_input-fields"
                                                placeholder="Your phone no here"
                                                size="small"
                                                onChange={formik.handleChange}
                                                value={formik.values.phone}
                                                style={{ width: "100%" }}
                                                id="phone"
                                                name="phone"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
                                                    </InputAdornment>
                                                }
                                                error={formik.errors.phone ? true : false}
                                                helperText={formik.errors.phone ? formik.errors.phone : ""}

                                            />
                                        </Grid>

                                        <Grid item xs={12} md={6} lg={6} sx={{ margin: "5px 0px" }}>
                                            <label className='label_text'>Subject</label>
                                            <ReusableInputfield
                                                type="text"
                                                className="contact_input-fields"
                                                placeholder="Your subject here"
                                                size="small"
                                                onChange={formik.handleChange}
                                                value={formik.values.subject}
                                                style={{ width: "100%" }}
                                                id="subject"
                                                name="subject"
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
                                                    </InputAdornment>
                                                }
                                                error={formik.errors.subject ? true : false}
                                                helperText={formik.errors.subject ? formik.errors.subject : ""}

                                            />
                                        </Grid>

                                        <Grid item xs={12} md={12} lg={12} sx={{ margin: "5px 0px" }}>
                                            <label className='label_text'>Message</label>
                                            <ReusableInputfield
                                                type="text"
                                                className="contact_input-fields"
                                                placeholder="Your message here"
                                                size="small"
                                                maxRows={5}
                                                rows={5}
                                                multiline={true}
                                                onChange={formik.handleChange}
                                                value={formik.values.message}
                                                style={{ width: "100%" }}
                                                id="message"
                                                name="message"
                                                error={formik.errors.message ? true : false}
                                                helperText={formik.errors.message ? formik.errors.message : ""}

                                            />
                                        </Grid>
                                    </Grid>
                                    <Box className="send_button-container">
                                        <ReusableButton size="small" type="submit" buttonName="Send" className="send_button" />
                                    </Box>
                                </form>
                            </Grid>

                            <Grid item xs={0} md={2} lg={2}></Grid>
                        </Grid>
                    </animated.div>
                }

            </Box>

            <Box className="Slider">
                <SliderCorousel />
            </Box>


            <Box className="top-to-btm">

                {showTopBtn && (
                    <NavigationIcon
                        className="icon-position icon-style"
                        onClick={goToTop}
                    />
                )}
            </Box>
        </div>
    )
}

export default Contact
