import React, { useEffect, useState } from 'react';
import './home.css';
import Header from '../header/header'
import { CarouselBanner, HomeNewProductCarousel, SliderCorousel } from '../../components/carousel/carousel';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import Footer from '../footer/footer';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import ReusableButton from '../../components/button/button';
import BlogOne from '../../assests/blogs/lightweight.jpg'
import BlogTwo from '../../assests/blogs/eid.jpg'
import BlogThree from '../../assests/blogs/shine.jpg'
import CommentIcon from '@mui/icons-material/Comment';
import PersonIcon from '@mui/icons-material/Person';
import NavigationIcon from '@mui/icons-material/Navigation';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';

const Home = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const newProducts = [
        { id: 1, img: BlogOne, name: "Lightweight College Jewellery", author: "Dinesh", comments: 6, description: "Eid-Al-Adha, also known as the Festival of Sacrifice, is a significant festival that Muslims celebrate worldwide. Prayers, feasts, acts of charity, and the exchange of gifts mark this sacred festival." },
        { id: 2, img: BlogTwo, name: "Eid Al-Adha inspired jewellery", author: "Poovila", comments: 5, description: "Look stylish without compromising on functionality with this guide to lightweight college jewellery!" },
        { id: 3, img: BlogThree, name: "Bridesmaids Jewellery", author: "Saran", comments: 5, description: "On her wedding day, the bride shines bright like a radiant diamond. She is the centre of attention with all eyes on her. With her bridesmaids around her constantly, they become hard to miss on her big day" },
    ]

    const homeFeature = [
        { id: 1, img: PersonIcon, name: "Fast shipping", icon: <LocalShippingOutlinedIcon /> },
        { id: 2, img: PersonIcon, name: "Timeless pieces", icon: <AccessTimeOutlinedIcon /> },
        { id: 3, img: PersonIcon, name: "Heritage inspired", icon: <WorkspacePremiumOutlinedIcon /> },
        { id: 4, img: PersonIcon, name: "Custom designs", icon: <DrawOutlinedIcon /> }

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
                <CarouselBanner />
            </Box>

            <Box className="home_tabs">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{}}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                                <Tab label="Trending Now" value="1" />
                                <Tab label="Top Sale" value="2" />
                                <Tab label="Best Sale" value="3" />
                            </TabList>
                        </Box>

                        <TabPanel value="1">
                            <HomeNewProductCarousel />
                        </TabPanel>

                        <TabPanel value="2">
                            <HomeNewProductCarousel />
                        </TabPanel>

                        <TabPanel value="3">
                            <HomeNewProductCarousel />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>

            <Box sx={{ margin: "30px 0px 50px 0px", padding:"50px 20px", background:"#9e9e9e1c" }}>
                <Grid container spacing={2}>
                    <Grid item xs={0} md={1} lg={1}></Grid>
                    {homeFeature.map((items) => (
                        <Grid item xs={12} md={2.5} lg={2.5}>
                            <Box className="home_feature">
                                <span className='home_feature-icon'>{items.icon}</span>
                                <span className='home_feature-text'>{items.name}</span>
                            </Box>
                        </Grid>
                    ))}
                    <Grid item xs={0} md={1} lg={1}></Grid>
                </Grid>
            </Box>

            <Box>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "25px"
                }}>
                    <span className='blog_header'>LATEST BLOGS</span>
                    <span className='blog_content-text mt-3'>A blog is a discussion or informational website published on the</span>
                    <span className='blog_content-text'>World Wide Web consisting of discrete</span>
                </div>

                <Box sx={{ margin: "40px" }}>
                    <Grid container spacing={2}>
                        {newProducts.map((items) => (
                            <Grid item xs={12} md={5.6} lg={4}>
                                <Card className="card">
                                    <CardActionArea className='blog_cardAction'>
                                        <CardMedia
                                            component="img"
                                            className='card-img'
                                            height="260"
                                            image={items.img}
                                            alt={items.name}
                                        />
                                        <CardContent className="card_content" sx={{ minHeight: "225px", maxHeight: "255px" }}>
                                            <Box sx={{ width: "100%" }}>
                                                <span className="product_text">{items.name}</span>
                                            </Box>
                                            <Box sx={{
                                                width: "100%",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginTop: "10px",
                                                alignItems: "center"
                                            }}>
                                                <span className="blog_text"> <PersonIcon className='blog_icons' /> {items.author}</span>
                                                <span className="blog_text"> <CommentIcon className='blog_icons' /> {items.comments}</span>
                                            </Box>
                                            <Box sx={{ width: "100%", marginTop: "10px" }}>
                                                <span style={{ textAlign: "start", display: "flex" , color:"#707070" }}>{items.description}</span>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <ReusableButton size="small" color="primary" buttonName="Read More" className="read_more-button" endIcon={<ArrowRightIcon sx={{ fontSize: "1.5rem !important" }} />} />
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
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
    );
};

export default Home;