import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import './login.css';
import { ReusableInputfield } from "../../components/input/input";
import Person4Icon from '@mui/icons-material/Person4';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import ReusableButton from "../../components/button/button";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../Networking/API";
import Cookies from "js-cookie";
import { Secret_key } from "../../constants/constants";
import CryptoJS from 'crypto-js';
// import Cookies from "js-cookie";
// import { Secret_key } from "../../Constant";
// import CryptoJS from 'crypto-js';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import GoogleIcon from '@mui/icons-material/Google';
// import IconButton from '@mui/material/IconButton';


function Index(props) {

    const navigate = useNavigate();
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        const isJwtToken = Cookies.get('jwt_token');
        // const isRefreshToken = Cookies.get('refresh_token');
        if (isJwtToken) {
            navigate('/user/');
        }
    }, []);

    useEffect(() => {
        // Clear the fields on page load
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');

        if (usernameField && passwordField) {
            usernameField.value = '';
            passwordField.value = '';
        }
    }, []);

    //remember me functionality
    useEffect(() => {
        const localUsername = localStorage.getItem("username");
        const localPassword = localStorage.getItem("password");
        if (localUsername && localPassword) {
            const decryptedUsername = CryptoJS.AES.decrypt(localUsername, Secret_key).toString(CryptoJS.enc.Utf8).replace(/[\'\"]/g, '');
            const decryptedPassword = CryptoJS.AES.decrypt(localPassword, Secret_key).toString(CryptoJS.enc.Utf8).replace(/[\'\"]/g, '');
            formik.setValues({
                username: decryptedUsername,
                password: decryptedPassword,
            });
        }

    }, [])

    const validateSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string()
            .required("Password is required")
    });


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            loginApiCall(values);
        },
    });

    const loginApiCall = (values) => {
        const { username, password } = values;
        API.Login(
            username,
            password
        ).then(({ response }) => {
            if (response.success) {
                console.log(response, "login that we tried");
                toast.success(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
                if (checked) {
                    const encryptedUsername = CryptoJS.AES.encrypt(JSON.stringify(username), Secret_key).toString();
                    const encryptedPassword = CryptoJS.AES.encrypt(JSON.stringify(password), Secret_key).toString();
                    localStorage.setItem("username", encryptedUsername);
                    localStorage.setItem("password", encryptedPassword);
                }
                const jwtToken = response.data?.accessToken;
                // const refreshToken = response.data?.refresh_token;
                const encryptedJwtToken = CryptoJS.AES.encrypt(JSON.stringify(jwtToken), Secret_key).toString();
                // const encryptedRefreshToken = CryptoJS.AES.encrypt(JSON.stringify(refreshToken), Secret_key).toString();
                Cookies.set('jwt_token', encryptedJwtToken);
                // Cookies.set('refresh_token', encryptedRefreshToken);
                const userRole = response.data?.user?.role;
                const userInfoData = response.data?.user.name;
                const userInfoID = response.data?.user.id;

                Cookies.set("username", userInfoData);
                Cookies.set("userId", userInfoID)

                if (userRole === 2) {
                    Cookies.set('role', "User");
                } else {
                    Cookies.set('role', "Admin");
                }
                const timer = setTimeout(() => {
                    navigate('/user');
                }, 2000);
                return () => clearTimeout(timer);
            } else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: false,
                    draggable: false,
                });
            }
        });
    }

    const handleCheckBox = (event) => {
        setChecked(event.target.checked);
    }

    return (
        <Box className="login_wrapper">
            <Grid container spacing={2} sx={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
                <Grid item xs={4}></Grid>



                <Grid item xs={4}></Grid>

                <Grid item xs={3} sx={{ width: "100%", display: "grid", alignItems: "center" }}>
                    <Box className="content_wrapper">
                        <Box className="content">
                            <Box className="login_logo-box">
                                {/* <img src="https://img1.wsimg.com/isteam/ip/be1295b8-cd9c-4553-8def-f8d0578017b5/F2F%20logo%20-%20BIG.png/:/rs=w:228,h:200,cg:true,m/cr=w:228,h:200/qt=q:95" alt="login_logo" width="80px" height="70px" /> */}
                                <span className="admin-text">Login Here !</span>
                            </Box>

                            <form onSubmit={formik.handleSubmit}>
                                <Box className="login_fields-box">
                                    <Box sx={{ display: "flex", margin: "20px 0px" }}>
                                        <ReusableInputfield
                                            type="text"
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.username}
                                            style={{ width: "100%" }}
                                            id="username"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person4Icon sx={{ fontSize: "1.2rem" }} />
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="Username"
                                            name="username"
                                            required={false}
                                            error={formik.errors.username ? true : false}
                                            helperText={formik.errors.username ? formik.errors.username : ""}
                                        />
                                    </Box>

                                    <Box sx={{ display: "flex", margin: "20px 0px" }}>
                                        <ReusableInputfield
                                            type="password"
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            helperText={formik.errors.password ? formik.errors.password : ""}
                                            style={{ width: "100%" }}
                                            id="password"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockIcon sx={{ fontSize: "1.2rem" }} />
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="Password"
                                            name="password"
                                            required={false}
                                            error={formik.errors.password ? true : false}
                                        />
                                    </Box>

                                    <Box sx={{ display: "flex", margin: "15px 0px" }}>
                                        <FormControlLabel control={<Checkbox className="checkbox-login" checked={checked} onChange={handleCheckBox} />} label="Remember Me" className="formControl-login" />
                                    </Box>

                                    <Box>
                                        <ReusableButton
                                            buttonName="LOGIN"
                                            size="medium"
                                            label=""
                                            id=""
                                            variant="contained"
                                            value=""
                                            name="pdf"
                                            style={{ width: "100%", color: "#fff", background: "#624F82", padding: "8px 0px" }}
                                            disabled={false}
                                            className="downloadbtn pdf"
                                            type="submit"
                                        />
                                    </Box>

                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
                                        <span>Don't have an account,<Link to="/register" style={{ textDecoration: "none", color: "#624F82" }}> Register here!</Link></span>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}

export default Index;
