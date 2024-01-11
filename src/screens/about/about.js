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

            <Box>
                <AboutUsCarousel />
            </Box>

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
            </animated.div>

            <Box className="middle-content-wrapper">
                <animated.div
                    className="middle-content-wrapper-inner"
                    style={springPropsThree} ref={refComment} >
                    <span className="my-md-2 my-3 quotes-header">JENIFER BURNS</span>
                    <ReactStars
                        classNames="middle-content-stars"
                        count={4}
                        onChange={ratingChanged}
                        size={20}
                        value={3.5}
                        isHalf={true}
                    />
                    <p className="middle-text">
                        <span className="content-quotes">
                            <FormatQuoteIcon /> Lorem Ipsum has been the industry's standard since the 1500s. Praesent
                            ullamcorper dui turpis.Nulla pellentesque mi non laoreet
                            eleifend. Integer porttitor mollisar lorem, at molestie arcu
                            pulvinar ut  <FormatQuoteIcon />

                        </span>
                    </p>
                </animated.div>
            </Box>

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
