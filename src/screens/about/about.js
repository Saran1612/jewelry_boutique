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

const About = () => {

    const DataTransfer = [
        { id: 1, img: UserOne, name: "Johakim Low", role: "Founder & CEO", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 2, img: UserFour, name: "Jamie McGuirk", role: "Managing Director", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 3, img: UserTwo, name: "Micle Jackarim", role: "Sales Director", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        { id: 4, img: UserThree, name: "Henry Todd", role: "General Manager", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        // { id: 5, name: "Mitchell Starc", role: "Founder & CEO", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" },
        // { id: 6, name: "", role: "Founder & CEO", description: "Burna phasellus aliquam sempe arcu bal dictum integer quis mi necili dapibus pretium in quis!" }
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


    return (
        <div>
            <Box>
                <Header />
            </Box>

            <Box>
                <AboutUsCarousel />
            </Box>

            <Box className="why_us">
                <Grid container spacing={2}>
                    {/* <Grid item xs={12} md={12} lg={6}>
                        <img src={Kg} alt="banner" className='about_grid-img' />
                    </Grid> */}
                    <Grid item xs={12} md={12} lg={12}>
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
                    </Grid>
                </Grid>
            </Box>

            <Box className="team_member-box">
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <span className='why_us-text'>Team Member</span>
                    <span className='why_us-content-text mt-1'>Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed aci erat</span>
                    <span className='why_us-content-text mb-4'>dales vitakse dalesnon estin vitae egestas.</span>
                </div>

                <div className='team_member-container'>
                    <Grid container spacing={2}>
                        {DataTransfer.map((items) => (
                            <Grid item xs={12} md={6} lg={3}>
                                <Card sx={{}} className='team_member-card'>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            // height="140"
                                            image={items.img}
                                            alt={items.img}
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
                                            <IconButton className="edit-icon">
                                                <TwitterIcon sx={{ fontSize: "1.3rem !important" }} />
                                            </IconButton>
                                            <IconButton className="edit-icon">
                                                <PinterestIcon sx={{ fontSize: "1.3rem !important" }} />
                                            </IconButton>
                                            <IconButton className="edit-icon">
                                                <InstagramIcon sx={{ fontSize: "1.3rem !important" }} />
                                            </IconButton>
                                            <IconButton className="edit-icon">
                                                <FacebookIcon sx={{ fontSize: "1.3rem !important" }} />
                                            </IconButton>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Box>

            <Box>
                <SliderCorousel />
            </Box>
            <Box>
                <Footer />
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
