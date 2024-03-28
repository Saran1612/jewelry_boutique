import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import '../login/login.css';
import { ReusableInputfield } from "../../components/input/input";
import Person4Icon from '@mui/icons-material/Person4';
import InputAdornment from '@mui/material/InputAdornment';
import { Link, useNavigate } from "react-router-dom";
import ReusableButton from "../../components/button/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../../Networking/API";
import { toast } from 'react-toastify';


function ForgetPassword(props) {

    const navigate = useNavigate();

    const validateSchema = Yup.object().shape({
        email: Yup.string().required("Email is required"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validateSchema,
        onSubmit: (values, { resetForm }) => {
            submitEmail(values);
        },
    });

    const submitEmail = (values) => {
        const { email } = values;
        API.getForgetPassword(
            email,
        ).then(({ response }) => {
            console.log(response, "respons of forgot api")
            if (response.success) {
                console.log(response, "login that we tried");
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
                                <span className="admin-text">Forget Password !</span>
                            </Box>

                            <form onSubmit={formik.handleSubmit}>
                                <Box className="login_fields-box">
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
                                                    <Person4Icon sx={{ fontSize: "1.2rem", color: "#624F82" }} />
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

export default ForgetPassword;
