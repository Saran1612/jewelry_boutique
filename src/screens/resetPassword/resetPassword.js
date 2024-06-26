import React, { useEffect, useState } from "react";
import { Box, Grid, IconButton } from "@mui/material";
import '../login/login.css';
import { ReusableInputfield } from "../../components/input/input";
import Person4Icon from '@mui/icons-material/Person4';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate, useParams } from "react-router-dom";
import ReusableButton from "../../components/button/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../Networking/API";
import { toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function ResetPassword() {

    const navigate = useNavigate();
    const { token } = useParams();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    console.log(token, "toekekek")

    const validateSchema = Yup.object().shape({
        new_password: Yup.string().required("Password is required"),
        confirm_password: Yup.string()
            .required('Please retype your password.')
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match'),
    });

    const formik = useFormik({
        initialValues: {
            new_password: "",
            confirm_password: ""
        },

        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            submitResetPassword(values);
        },
    });

    const submitResetPassword = (values) => {
        const { confirm_password } = values;
        API.getResetPassword(
            confirm_password,
            token
        ).then(({ response }) => {
            console.log(response, "respons of reset password api")
            if (response.success) {
                toast.success(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
                navigate("/")
            } else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
            }
        });
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
                                <span className="admin-text">Reset Password !</span>
                            </Box>

                            <form onSubmit={formik.handleSubmit}>
                                <Box className="login_fields-box">
                                    <Box sx={{ display: "flex", margin: "20px 0px" }}>
                                        <ReusableInputfield
                                            type={showPassword ? 'text' : 'password'}
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.new_password}
                                            style={{ width: "100%" }}
                                            id="new_password"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
                                                </InputAdornment>
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                    >
                                                        {showPassword ? <Visibility sx={{ fontSize: "1.2rem", color: "#624F82" }} /> : <VisibilityOff sx={{ fontSize: "1.2rem", color: "#624F82" }} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="New Password"
                                            name="new_password"
                                            required={false}
                                            error={formik.errors.new_password ? true : false}
                                            helperText={formik.errors.new_password ? formik.errors.new_password : ""}
                                        />
                                    </Box>

                                    <Box sx={{ display: "flex", margin: "20px 0px" }}>
                                        <ReusableInputfield
                                            type="text"
                                            size="medium"
                                            className="login_inputfield"
                                            onChange={formik.handleChange}
                                            value={formik.values.confirm_password}
                                            style={{ width: "100%" }}
                                            id="confirm_password"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <Person4Icon sx={{ fontSize: "1.2rem" }} />
                                                </InputAdornment>
                                            }
                                            disabled={false}
                                            variant="standard"
                                            fullWidth={true}
                                            placeholder="Confirm Password"
                                            name="confirm_password"
                                            required={false}
                                            error={formik.errors.confirm_password ? true : false}
                                            helperText={formik.errors.confirm_password ? formik.errors.confirm_password : ""}
                                        />
                                    </Box>

                                    <Box>
                                        <ReusableButton
                                            buttonName="SUBMIT"
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

                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexDirection: "column", marginTop: "1rem" }}>
                                        <span>Have an account,<Link to="/" style={{ textDecoration: "none", color: "#624F82" }}>  Login here!</Link></span>
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

export default ResetPassword;
