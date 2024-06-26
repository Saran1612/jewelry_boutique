import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import { Box, CardActionArea, Grid, IconButton } from '@mui/material';
import Footer from '../footer/footer';
import { AboutUsCarousel, SliderCorousel } from '../../components/carousel/carousel';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import './about.css';
import ReusableButton from '../../components/button/button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import UserOne from '../../assests/profile/userOne.png'
import UserThree from '../../assests/profile/userthree.png'
import UserTwo from '../../assests/profile/tggt.png'
import UserFour from '../../assests/profile/back.png'
import NavigationIcon from '@mui/icons-material/Navigation';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ReactStars from "react-rating-stars-component";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import { Banner, Usage } from '../../components/swiper/swiper';
import Spinner from '../../utils/spinner';
import { API } from '../../Networking/API';
import { Link } from 'react-router-dom';

const About = () => {
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [bannerData, setBannerData] = useState([]);
    const [peoplesData, setPeoplesData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    const fetchBanner = () => {
        setLoadSpinner(true);
        const category_name = 'about'
        API.getBannerData(category_name).then(({ response }) => {
            console.log(response, "respose of getBannerData in shop data")
            if (response.success) {
                setBannerData(response.data[0]);
            }
            setLoadSpinner(false);
        })
    }

    const fetchOurPeoples = () => {
        setLoadSpinner(true);
        API.getOurPeoples().then(({ response }) => {
            console.log(response, "response of our peoples")
            if (response.success) {
                setPeoplesData(response.data)
            }
            setLoadSpinner(false);
        })
    }

    const fetchReviews = () => {
        setLoadSpinner(true);
        API.getReviewsData().then(({ response }) => {
            console.log(response, "respose of fetchReviews data")
            if (response.success) {
                setReviewsData(response.data);
            }
            setLoadSpinner(false);
        })
    }

    useEffect(() => {
        fetchBanner();
        fetchOurPeoples();
        fetchReviews();
    }, [])

    const DataTransfer = [
        { id: 1, img: UserOne, name: "Johakim Low", role: "Founder & CEO", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 2, img: UserFour, name: "Jamie McGuirk", role: "Managing Director", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 3, img: UserTwo, name: "Micle Jackarim", role: "Sales Director", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 4, img: UserThree, name: "Henry Todd", role: "General Manager", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
    ]

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

    const ratingChanged = (newRating) => {
        // console.log(newRating);
    };


    //About-why_choose-jane
    const [refChoose, inViewChoose] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsChoose = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
        to: { opacity: inViewChoose ? 1 : 0, transform: inViewChoose ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)' },
        config: { duration: 1000 },
    });


    //About-TeamMember
    const [refTeamMember, inViewTeamMember] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsTeamMember = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
        to: { opacity: inViewTeamMember ? 1 : 0, transform: inViewTeamMember ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)' },
        config: { duration: 1000 },
    });


    //Home-comment
    const [refComment, inViewComment] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });

    const springPropsThree = useSpring({
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: inViewComment ? 1 : 0, scale: inViewComment ? 1 : 0.5 },
        config: { duration: 1000 },
    });


    return (
        <div>

            {loadSpinner ? <Spinner /> : bannerData?.carouselImages?.length > 0 ? <Box>
                <Banner bannerData={bannerData} bannerImages={bannerData.carouselImages} />
            </Box> : null}

            <Box className="why_us">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12}>
                        <animated.div ref={refChoose} style={springPropsChoose}>
                            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", padding: { xs: "0px 0px 30px 0px", lg: "30px 50px 50px 50px" } }}>
                                <span className='why_us-text'>Why Choose Jane ?</span>
                                <span className='why_us-content-text mt-1 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                <div>
                                    <ul style={{ listStyle: "none", textAlign: "start" }}>
                                        <li className='mt-2 list'><RadioButtonCheckedOutlinedIcon sx={{ fontSize: "1rem !important", color: "#707070" }} /> <span className='list_points-text'>Best & Good Delivery Service</span></li>
                                        <li className='mt-2 list'><RadioButtonCheckedOutlinedIcon sx={{ fontSize: "1rem !important", color: "#707070" }} /> <span className='list_points-text'>Quality, Fresh, Authentic Supplier.</span></li>
                                        <li className='mt-2 list'><RadioButtonCheckedOutlinedIcon sx={{ fontSize: "1rem !important", color: "#707070" }} /> <span className='list_points-text'>We Are Always Provide Goood Quality Products.</span></li>
                                    </ul>

                                    <ReusableButton buttonName="View More" className="view_more-button mt-4" />
                                </div>
                            </Box>
                        </animated.div>
                    </Grid>
                </Grid>
            </Box>

            <animated.div className="team_member-box" style={springPropsTeamMember} ref={refTeamMember}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className='why_us-text'>Team Member</span>
                    <span className='why_us-content-text mt-1'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed aci erat</span>
                    <span className='why_us-content-text mb-4'>dales vitakse dalesnon estin vitae egestas.</span>
                </div>

                <div className='team_member-container'>
                    <Grid container spacing={2}>
                        {console.log(peoplesData, "peoplesData")}
                        {peoplesData?.map((items) => (
                            <Grid item xs={12} md={6} lg={3}>
                                <Card sx={{}} className='team_member-card'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            // height="140"
                                            image={items.image}
                                            alt={items.name}
                                            className='user_img'
                                        />
                                        <CardContent>
                                            <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                                <span className="user_name-text">
                                                    {items.name}
                                                </span>
                                                <span className="user_role-text">
                                                    {items.role}
                                                </span>
                                                <span className='user_desc-text mt-1'>
                                                    {items.description}
                                                </span>
                                            </Box>
                                        </CardContent>
                                        <div className="card-icons">
                                            <Link to={items.twitter}>
                                                <IconButton className="edit-icon">
                                                    <TwitterIcon sx={{ fontSize: "1.3rem !important" }} />
                                                </IconButton>
                                            </Link>

                                            <Link to={items.twitter}>
                                                <IconButton className="edit-icon">
                                                    <PinterestIcon sx={{ fontSize: "1.3rem !important" }} />
                                                </IconButton>
                                            </Link>

                                            <Link to={items.instagram}>
                                                <IconButton className="edit-icon">
                                                    <InstagramIcon sx={{ fontSize: "1.3rem !important" }} />
                                                </IconButton>
                                            </Link>

                                            <Link to={items.facebook}>
                                                <IconButton className="edit-icon">
                                                    <FacebookIcon sx={{ fontSize: "1.3rem !important" }} />
                                                </IconButton>
                                            </Link>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </animated.div>

            {loadSpinner ? <Spinner /> :
                reviewsData.length > 0 ?
                    <div className="middle-content-wrapper">
                        <Usage reviewsData={reviewsData} />
                    </div> : null}

            <Box>
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

export default About
