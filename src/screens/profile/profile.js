import { Box, Grid, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ShopCarousel } from '../../components/carousel/carousel';
import { ReusableInputfield } from '../../components/input/input';
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../Networking/API";
import InputAdornment from '@mui/material/InputAdornment';
import ReusableButton from '../../components/button/button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ProfilePic from '../../assests/profile/dummy-profile-pic.jpg'
import CamPic from "../../assests/profile/picc.svg";
import { LineWave } from 'react-loader-spinner'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../utils/spinner';

const formRequired = [
    { id: 1, label: "Name", name: "name", type: "text", icon: <PersonOutlineOutlinedIcon sx={{ fontSize: "1.2rem", color: "#624F82" }} /> },
    { id: 2, label: "Email", name: "email", type: "text", icon: <EmailOutlinedIcon sx={{ fontSize: "1.2rem", color: "#624F82" }} /> },
    { id: 3, label: "Age", name: "age", type: "number", icon: <CalendarMonthOutlinedIcon sx={{ fontSize: "1.2rem", color: "#624F82" }} /> },
    { id: 4, label: "Phone Number", name: "phonenumber", type: "number", icon: <LocalPhoneOutlinedIcon sx={{ fontSize: "1.2rem", color: "#624F82" }} /> }
];

const Profile = () => {
    const [fileValue, setFileValue] = useState("");
    const [profileData, setProfileData] = useState([]);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        fetchUserInfo();
    }, []);
    console.log(profileData, "profileData")

    const fetchUserInfo = () => {
        API.getUserInfo().then(({ response }) => {
            console.log(response, "respons eof user")
            if (response.success) {
                setProfileData(response.data)
            } else if (response.message === "Invalid Token") {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
                navigate('/')
            }
        })
    }

    const validateSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        age: Yup.string().required("Age is required"),
        phonenumber: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone Number is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: profileData.name ? profileData.name : "",
            email: profileData.email ? profileData.email : "",
            age: profileData.age ? profileData.age : "",
            phonenumber: profileData.phonenumber ? profileData.phonenumber : "",
        },
        enableReinitialize: true, // Add this line
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            feedbackApi(values, resetForm);
        },
    });

    const feedbackApi = (values, resetForm) => {
        console.log(values, "wanttoupdate")
        const { name, age, email, phonenumber } = values
        setLoadSpinner(true)
        API.updateUserInfo(name, age, email, phonenumber).then(({ response }) => {
            console.log(response, "resposeofupdateinfo")
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
            setLoadSpinner(false)
        })
    }

    const handleFileUpload = (event) => {
        console.log(event.target.files, "targetteteted")
        const selectedFile = event.target.files[0];
        console.log(selectedFile, "selectedFile");
        setFileValue(selectedFile);

        API.uploadProfilePic(selectedFile).then(({ response }) => {
            console.log(response, "response of profile pic uploading")
            if (response.success) {
                fetchUserInfo();
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
        })
    };

    return (
        <div>
            <Box>
                <ShopCarousel />
            </Box>

            <Grid container spacing={2} className='tw-p-14'>
                <Grid item xs={8} sx={{ margin: "auto" }}>
                    <div className='tw-bg-[#6868681c] tw-rounded-md'>
                        {loadSpinner ? <Spinner /> : <form onSubmit={formik.handleSubmit}>
                            <h2 className='tw-w-full tw-flex tw-text-start tw-px-5 tw-pt-3 tw-font-semibold'>Profile Details</h2>
                            <Grid container spacing={2} sx={{ margin: "1.8rem 0 0 0", width: "100%", padding: "0 1rem" }}>
                                {formRequired.map((item, index) => (
                                    <Grid xs={6} key={index} className='p-2'>
                                        <label className='label_text'>{item.label}</label>
                                        <ReusableInputfield
                                            style={{ width: "100%" }}
                                            size="small"
                                            className="contact_input-fields"
                                            type={item.type}
                                            name={item.name}
                                            placeholder={item.label}
                                            onChange={formik.handleChange}
                                            value={formik.values[item.name]} // Access value dynamically
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    {item.icon}
                                                </InputAdornment>
                                            }
                                            error={formik.touched[item.name] && Boolean(formik.errors[item.name])} // Check if field has been touched and if there is an error
                                            helperText={formik.touched[item.name] && formik.errors[item.name]} // Show helper text if field has been touched and there's an error
                                        />
                                    </Grid>
                                ))}
                            </Grid>

                            <Box className="tw-py-8">
                                <ReusableButton
                                    buttonName="Submit"
                                    type="submit"
                                    endIcon=""
                                    className="send_button" />
                            </Box>
                        </form>}



                    </div>
                </Grid>

                <Grid item xs={4}>
                    <div className='tw-bg-[#9F73AB] tw-rounded-md tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center'>
                        <div className='tw-relative tw-rounded-full tw-border-[#fff] tw-border-[2px] tw-border-dashed tw-p-[5px]'>
                            <img src={profileData?.image ? profileData.image : ProfilePic} alt="profile_pic" width="125" height="125" className='tw-rounded-full tw-border-[#fff] tw-border-[1.5px] tw-border-dashed tw-p-[5px]' />
                            <input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                name='file'
                                style={{ display: "none" }}
                                onChange={handleFileUpload}
                            />
                            <label
                                htmlFor="icon-button-file"
                                className='profile_label'
                                style={{
                                    padding: "0px",
                                    width: "30px",
                                    borderRadius: "50%",
                                    height: "30px",
                                    background: "#9F73AB",
                                    border: "1px solid #fff",
                                    position: "absolute",
                                    right: "0",
                                    bottom: "0px",
                                    // left: "30px"
                                }}
                            >
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                >
                                    <img
                                        loading="lazy"
                                        src={CamPic}
                                        alt="CamPic"
                                        className="cloud_icon"
                                        width="20"
                                        height="20"
                                        sx={{ margin: "0px" }}
                                    />
                                </IconButton>
                            </label>
                        </div>
                        <span className='tw-mt-2 tw-text-white tw-font-semibold'>Neil Sams</span>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile;
