import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, Outlet } from 'react-router-dom';
import Logo1 from '../../assests/logo/icons8-jewel-64.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './footer.css';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';

const Footer = () => {

    //Footer-Policy
    const [refPolicy, inViewPolicy] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.1, // Percentage of element visibility required to trigger the animation
    });

    const springPropsPolicy = useSpring({
        from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
        to: { opacity: inViewPolicy ? 1 : 0, transform: inViewPolicy ? 'translate3d(0,0,0)' : 'translate3d(-100px,0,0)' },
        config: { duration: 750 },
    });

    //Footer-Address
    const [refAddress, inViewAddress] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.1, // Percentage of element visibility required to trigger the animation
    });

    const springPropsAddress = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,75px,0)' },
        to: { opacity: inViewAddress ? 1 : 0, transform: inViewAddress ? 'translate3d(0,0,0)' : 'translate3d(0,75px,0)' },
        config: { duration: 750 },
    });

    return (
        <>
            <Box>
                <Outlet />
            </Box>
            <Box>
                <animated.div ref={refAddress} style={springPropsAddress} className="foooter-address">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={4}>
                            <div>
                                <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
                                    <img src={Logo1} alt='logo' className='header_logo' />
                                    <Box sx={{ display: "flex", flexDirection: "column", padding: "0px 12px" }}>
                                        <span className='header__text'>Jane's</span>
                                        <span className='header__subtext'>Boutique</span>
                                    </Box>
                                </Link>

                                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "start" }}>
                                    <span style={{ textAlign: "start", margin: "8px 0px 0px 0px" }}>Address: 2726 Avenue Papineau Montreal, QC, Canada</span>
                                    <span style={{ textAlign: "start", margin: "8px 0px 0px 0px" }}>Phone: 1-800-915-6270</span>
                                    <span style={{ textAlign: "start", margin: "8px 0px 0px 0px" }}>Email: jane.boutique@gmail.com</span>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "start" }}>
                                <span style={{ textAlign: "start", marginTop: "8px", fontWeight: "700" }}>EXPLORE</span>
                                <ul style={{ listStyle: "none", marginTop: "22px", padding: "0px" }}>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Jewellery & Collections</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Love & Engagement</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Learn & Explore</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Exclusives</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Our Story</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Responsibly Sourced</li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "start" }}>
                                <span style={{ textAlign: "start", marginTop: "8px", fontWeight: "700" }}>MAY WE HELP YOU?</span>
                                <ul style={{ listStyle: "none", marginTop: "22px", padding: "0px" }}>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />FAQs</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Contact us</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Email us</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Call us</li>
                                    <li className='explore_list'><AutoAwesomeIcon className='footer_icon-points' />Terms & Conditions</li>

                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={2}>
                            <Box style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "start" }}>
                                <span style={{ textAlign: "start", marginTop: "8px", fontWeight: "700" }}>FOLLOW US</span>
                                <ul style={{ listStyle: "none", marginTop: "22px", padding: "0px" }}>
                                    <li className='explore_list'><FacebookIcon className='footer_icon' />Facebook</li>
                                    <li className='explore_list'><InstagramIcon className='footer_icon' />Instagram</li>
                                    <li className='explore_list'> <TwitterIcon className='footer_icon' />Twitter</li>
                                    <li className='explore_list'><PinterestIcon className='footer_icon' />Pinterest</li>
                                    <li className='explore_list'><YouTubeIcon className='footer_icon' />Youtube</li>
                                </ul>
                            </Box>
                        </Grid>
                    </Grid>

                </animated.div>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box style={{ background: "#9F73AB", padding: "18px 40px", color: "#fff", textAlign: "start" }}>
                            <animated.div ref={refPolicy} style={springPropsPolicy}>
                                <span className='explore_list-text'>Privacy</span>
                                <span className='explore_list-text mx-4'>|</span>
                                <span className='explore_list-text'>Cookie Policy</span>
                                <span className='explore_list-text mx-4'>|</span>
                                <span className='explore_list-text'>© 2023 jane's boutiques. All Rights Reserved.</span>
                            </animated.div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer;
