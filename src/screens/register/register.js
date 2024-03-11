import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import './register.css';
import { ReusableInputfield } from "../../components/input/input";
import Person4Icon from '@mui/icons-material/Person4';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom";
import ReusableButton from "../../components/button/button";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../Networking/API";
// import Cookies from "js-cookie";
// import { Secret_key } from "../../Constant";
// import CryptoJS from 'crypto-js';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import GoogleIcon from '@mui/icons-material/Google';
// import IconButton from '@mui/material/IconButton';
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";


function Register(props) {

    const navigate = useNavigate();
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        // const isJwtToken = Cookies.get('jwt_token');
        // const isRefreshToken = Cookies.get('refresh_token');
        // if (isJwtToken && isRefreshToken) {
        //     navigate('/admin/');
        // }
    }, []);

    useEffect(() => {
        // Clear the fields on page load
        // const usernameField = document.getElementById('username');
        // const passwordField = document.getElementById('password');

        // if (usernameField && passwordField) {
        //     usernameField.value = '';
        //     passwordField.value = '';
        // }
    }, []);

    //remember me functionality
    useEffect(() => {
        // const localUsername = localStorage.getItem("username");
        // const localPassword = localStorage.getItem("password");
        // if (localUsername && localPassword) {
        //     const decryptedUsername = CryptoJS.AES.decrypt(localUsername, Secret_key).toString(CryptoJS.enc.Utf8).replace(/[\'\"]/g, '');
        //     const decryptedPassword = CryptoJS.AES.decrypt(localPassword, Secret_key).toString(CryptoJS.enc.Utf8).replace(/[\'\"]/g, '');
        //     formik.setValues({
        //         username: decryptedUsername,
        //         password: decryptedPassword,
        //     });
        // }

    }, [])

    const validateSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required"),
        phonenumber: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone Number is required"),
        date: Yup.date().required("Date is required"),
    });


    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            phonenumber: "",
            date: null, // Assuming date is a Date object
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            registerApiCall(values, resetForm);
        },
    });

    const registerApiCall = (values, resetForm) => {
        const { username, password, email, phonenumber } = values;
        // const formattedDate = formik.values.date ? dayjs(formik.values.date).format('DD-MM-YYYY') : '';
        const age = calculateAge(values.date);
        console.log(age, "age")
        API.Register(
            username,
            email,
            password,
            phonenumber,
            age
        ).then(({ response }) => {
            if (response.success) {
                console.log(response, "Register that we tried");
                toast.success("Registered Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                    hideProgressBar: true,
                    draggable: false,
                });
                resetForm()
                navigate("/")
                // if (checked) {
                //     const encryptedUsername = CryptoJS.AES.encrypt(JSON.stringify(username), Secret_key).toString();
                //     const encryptedPassword = CryptoJS.AES.encrypt(JSON.stringify(password), Secret_key).toString();
                //     localStorage.setItem("username", encryptedUsername);
                //     localStorage.setItem("password", encryptedPassword);
                // }
                // const jwtToken = response.data?.access_token;
                // const refreshToken = response.data?.refresh_token;
                // const encryptedJwtToken = CryptoJS.AES.encrypt(JSON.stringify(jwtToken), Secret_key).toString();
                // const encryptedRefreshToken = CryptoJS.AES.encrypt(JSON.stringify(refreshToken), Secret_key).toString();
                // Cookies.set('jwt_token', encryptedJwtToken);
                // Cookies.set('refresh_token', encryptedRefreshToken);
                // Cookies.set('role', "Admin");
                // const timer = setTimeout(() => {
                //     navigate('/admin/');
                // }, 2000);
                // return () => clearTimeout(timer);
            } else {
                toast.error("Registration failed", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                    hideProgressBar: true,
                    draggable: false,
                });
            }
        });
    }

    const calculateAge = (birthdate) => {
        const today = dayjs();
        const birthdateObj = dayjs(birthdate);

        // Calculate the difference in years
        const age = today.diff(birthdateObj, 'year');

        return age;
    };

    // const handleCheckBox = (event) => {
    //     setChecked(event.target.checked);
    // }

    console.log(formik.errors, "erros having");
    console.log(formik.values, "values having");



    return (
        <Box className="register_wrapper">
            <Grid container spacing={2} sx={{ minHeight: "100vh", display: "flex", justifyContent: "center" }}>
                <Grid item xs={4}></Grid>



                <Grid item xs={4}></Grid>

                <Grid item xs={3} sx={{ width: "100%", display: "grid", alignItems: "center" }}>
                    <Box className="content_wrapper">
                        <Box className="content">
                            <Box className="login_logo-box">
                                {/* <img src="https://img1.wsimg.com/isteam/ip/be1295b8-cd9c-4553-8def-f8d0578017b5/F2F%20logo%20-%20BIG.png/:/rs=w:228,h:200,cg:true,m/cr=w:228,h:200/qt=q:95" alt="login_logo" width="80px" height="70px" /> */}
                                <span className="admin-text">Register Here !</span>
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
                                            type="text"
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            style={{ width: "100%" }}
                                            id="email"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person4Icon sx={{ fontSize: "1.2rem" }} />
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="Email"
                                            name="email"
                                            required={false}
                                            error={formik.errors.email ? true : false}
                                            helperText={formik.errors.email ? formik.errors.email : ""}
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

                                    <Box sx={{ display: "flex", margin: "20px 0px" }}>
                                        <ReusableInputfield
                                            type="text"
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.phonenumber}
                                            style={{ width: "100%" }}
                                            id="phonenumber"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person4Icon sx={{ fontSize: "1.2rem" }} />
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="Phone Number"
                                            name="phonenumber"
                                            required={false}
                                            error={formik.errors.phonenumber ? true : false}
                                            helperText={formik.errors.phonenumber ? formik.errors.phonenumber : ""}
                                        />
                                    </Box>

                                    {/* <Box sx={{ display: "flex" }}>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                className="date-picker"
                                                value={formik.values.date}
                                                // onChange={formik.handleChange}
                                                onChange={(date) => formik.setFieldValue('date', date)}
                                                renderInput={(params) => <TextField {...params} error={formik.errors.date ? true : false} helperText={formik.errors.date ? formik.errors.date : ""}
                                                />}
                                                disableFuture
                                                id="date"
                                                name="date"
                                            />
                                        </LocalizationProvider>
                                    </Box> */}

                                    <Box sx={{ marginTop: "20px" }}>
                                        <ReusableButton
                                            buttonName="REGISTER"
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

                                    {/* <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", marginTop: "1rem" }}>
                                        <IconButton>
                                            <GoogleIcon sx={{ color: "#624F82" }} />
                                        </IconButton>
                                    </Box> */}
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Register;
