import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Tab, Tabs } from '@mui/material';
import Footer from '../footer/footer';
import ReactStars from "react-rating-stars-component";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from '@mui/icons-material/Search';
import './shop.css';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from "@mui/material/Checkbox";
import { ShopCarousel, ShopFeaturedProductCarousel, ShopNecklacesProductCarousel, ShopNewProductCarousel, ShopTrendingProductCarousel, SliderCorousel } from '../../components/carousel/carousel';

// new products

import Six from '../../assests/newProd/f.jpg';
import Seven from '../../assests/newProd/g.jpg';
import Eight from '../../assests/newProd/e.jpg';
import Nine from '../../assests/newProd/l.jpg';
import Ten from '../../assests/newProd/j.jpg';
import { Link } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <span>{children}</span>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


const Shop = () => {


    const [showTopBtn, setShowTopBtn] = useState(false);

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const cornerData = [
        { id: 1, foto: Six, topic: "Diamond Oval", price: "$180.00" },
        { id: 2, foto: Seven, topic: "Bulova Jewelry", price: "$99.00" },
        { id: 3, foto: Eight, topic: "Cultured Pearl", price: "$165.00" },
        { id: 4, foto: Nine, topic: "Diamond Frame", price: "$225.00" },
        { id: 5, foto: Ten, topic: "Enchanted Disney", price: "$1.00" },
    ];


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

    //Home-Featured
    const [refFeatured, inViewFeatured] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });


    const springPropsFeatured = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
        to: { opacity: inViewFeatured ? 1 : 0, transform: inViewFeatured ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)' },
        config: { duration: 750, }, // Adjust the duration as needed
    });

    //Home-New
    const [refNew, inViewNew] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });


    const springPropsNew = useSpring({
        from: { opacity: 0, transform: 'translateY(200px)' },
        to: { opacity: inViewNew ? 1 : 0, transform: inViewNew ? 'translateY(0px)' : 'translateY(200px)' },
        config: { duration: 750, }, // Adjust the duration as needed
    });

    //Home-Trending
    const [refTrending, inViewTrend] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsTrend = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,200px,0)' },
        to: { opacity: inViewTrend ? 1 : 0, transform: inViewTrend ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)' },
        config: { duration: 750 }, // Adjust the duration as needed
    });


    //Home-FilterOne
    const [refSearchOne, inViewSearchOne] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsSearchOne = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: inViewSearchOne ? 1 : 0, transform: inViewSearchOne ? 'translateX(0px)' : 'translateX(-200px)' },
        config: { duration: 750 }, // Adjust the duration as needed
        delay: 500,
    });

    //Home-FilterCustomer
    const [refDiscount, inViewDiscount] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsDiscount = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: inViewDiscount ? 1 : 0, transform: inViewDiscount ? 'translateX(0px)' : 'translateX(-200px)' },
        config: { duration: 750 }, // Adjust the duration as needed
        delay: 600,
    });


    //Home-FilterCustomer
    const [refCustomer, inViewCustomer] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsCustomer = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: inViewCustomer ? 1 : 0, transform: inViewCustomer ? 'translateX(0px)' : 'translateX(-200px)' },
        config: { duration: 750 }, // Adjust the duration as needed
    });

    //Home-FilterRelated
    const [refRelated, inViewRelated] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsRelated = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: inViewRelated ? 1 : 0, transform: inViewRelated ? 'translateX(0px)' : 'translateX(-200px)' },
        config: { duration: 750 }, // Adjust the duration as needed
    });

    const ringsTobeRendered = (
        <animated.div className="m-4" ref={refFeatured} style={springPropsFeatured}>
            <span className='shop_header-text'>Rings</span>
            <Box className="mt-3">
                <ShopFeaturedProductCarousel />
            </Box>
        </animated.div>
    )

    const earringsTobeRendered = (
        <animated.div className="new_products" ref={refNew} style={springPropsNew}>
            <span className='shop_header-text'>Earrings</span>
            <Box className="mt-3">
                <ShopNewProductCarousel />
            </Box>
        </animated.div>
    )

    const braceletsTobeRendered = (
        <animated.div className="trending_products" ref={refTrending} style={springPropsTrend}>
            <span className='shop_header-text'>Bracelets</span>
            <Box className="mt-3">
                <ShopTrendingProductCarousel />
            </Box>
        </animated.div>
    )

    const necklacesTobeRendered = (
        <animated.div className="trending_products" ref={refTrending} style={springPropsTrend}>
            <span className='shop_header-text'>Necklaces</span>
            <Box className="mt-3">
                <ShopNecklacesProductCarousel />
            </Box>
        </animated.div>
    )

    const tabsPanel = [
        { id: 1, index: 0, render: ringsTobeRendered },
        { id: 2, index: 1, render: earringsTobeRendered },
        { id: 3, index: 2, render: braceletsTobeRendered },
        { id: 4, index: 3, render: necklacesTobeRendered },
    ]

    return (
        <div>
            {/* <Box>
                <Header />
            </Box> */}

            <Box>
                <ShopCarousel />
            </Box>

            {/* <Box>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={0}
                        md={3}
                        lg={3}
                        sx={{ display: { xs: "none", sm: "none", md: "block" } }} >
                        <div style={{
                            padding: "40px 20px 40px 20px",
                            border: "1.5px solid #ebebeb", margin: "40px 20px",
                            boxShadow: "0 0 2px rgba(44, 35, 39, 0.15)"
                        }}>

                            <animated.div className="product-search-bar" ref={refSearchOne} style={springPropsSearchOne}>
                                <div style={{ display: "flex" }}>
                                    <input
                                        type="text"
                                        placeholder="Search.."
                                        name="search"
                                        className="product-input-field"
                                    />
                                    <IconButton className="edit-icon-search">
                                        <SearchIcon sx={{ fontSize: "1.3rem !important" }} />
                                    </IconButton>
                                </div>
                            </animated.div>

                            <div className="product-radio-box-content mt-4">

                                <animated.div className="product-occasion-div mt-4" ref={refDiscount} style={springPropsDiscount}>
                                    <span className="special-deals-text mb-2">DISCOUNT</span>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="5% or More"
                                            className='discount_text'
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="10% or More"
                                            className='discount_text'
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="20% or More"
                                            className='discount_text'
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="30% or More"
                                            className='discount_text'
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="50% or More"
                                            className='discount_text'
                                        />
                                    </FormGroup>
                                </animated.div>

                                <animated.div className="product-review-div mt-4" ref={refCustomer} style={springPropsCustomer}>
                                    <span className="special-deals-text mb-2">
                                        CUSTOMER REVIEW
                                    </span>
                                    <div className="products-review-content-div">
                                        <div className="star-review-one">
                                            <ReactStars
                                                classNames="stars"
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9F73AB"
                                                isHalf={true}
                                            />
                                            <span style={{
                                                marginLeft: "10px",
                                                fontFamily: 'Neuton , serif',
                                                color: "#707070",
                                                fontSize: "1rem",
                                                fontWeight: "700"
                                            }}>5</span>
                                        </div>
                                        <div className="star-review-one">
                                            <ReactStars
                                                classNames="stars"
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9F73AB"
                                                isHalf={true}
                                            />
                                            <span style={{
                                                marginLeft: "10px",
                                                fontFamily: 'Neuton , serif',
                                                color: "#707070",
                                                fontSize: "1rem",
                                                fontWeight: "700"
                                            }}>4</span>
                                        </div>
                                        <div className="star-review-one">
                                            <ReactStars
                                                classNames="stars"
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9F73AB"
                                                isHalf={true}
                                            />
                                            <span style={{
                                                marginLeft: "10px",
                                                fontFamily: 'Neuton , serif',
                                                color: "#707070",
                                                fontSize: "1rem",
                                                fontWeight: "700"
                                            }}>3</span>
                                        </div>
                                        <div className="star-review-one">
                                            <ReactStars
                                                classNames="stars"
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9F73AB"
                                                isHalf={true}
                                            />
                                            <span style={{
                                                marginLeft: "10px",
                                                fontFamily: 'Neuton , serif',
                                                color: "#707070",
                                                fontSize: "1rem",
                                                fontWeight: "700"
                                            }}>2</span>
                                        </div>
                                        <div className="star-review-one">
                                            <ReactStars
                                                classNames="stars"
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#9F73AB"
                                                isHalf={true}
                                            />
                                            <span style={{
                                                marginLeft: "10px",
                                                fontFamily: 'Neuton , serif',
                                                color: "#707070",
                                                fontSize: "1rem",
                                                fontWeight: "700"
                                            }}>1</span>
                                        </div>
                                    </div>
                                </animated.div>

                                <animated.div className='related_product mt-4' ref={refRelated} style={springPropsRelated}>
                                    <span className="special-deals-text mb-4">
                                        RELATED PRODUCTS
                                    </span>
                                    {cornerData.map((items) => (
                                        <Link to="/products" style={{ textDecoration: "none" }}>
                                            <Card sx={{
                                                display: 'flex',
                                                margin: "18px 0px",
                                                justifyContent: "space-between",
                                                padding: "15px",
                                                alignItems: "center"
                                            }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <CardContent sx={{ flex: '1 0 auto', padding: "0px !important" }}>
                                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span className='related_product-text'>
                                                                {items.topic}
                                                            </span>
                                                            <span className='related_product-price-text'>
                                                                {items.price}
                                                            </span>
                                                        </Box>
                                                    </CardContent>
                                                </Box>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 75, objectFit: "contain" }}
                                                    image={items.foto}
                                                    alt={items.foto}

                                                />
                                            </Card>
                                        </Link>
                                    ))}
                                </animated.div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={9} lg={9}>
                        <animated.div className="m-4" ref={refFeatured} style={springPropsFeatured}>
                            <span className='shop_header-text'>Rings</span>
                            <Box className="mt-3">
                                <ShopFeaturedProductCarousel />
                            </Box>
                        </animated.div>

                        <animated.div className="new_products" ref={refNew} style={springPropsNew}>
                            <span className='shop_header-text'>Earrings</span>
                            <Box className="mt-3">
                                <ShopNewProductCarousel />
                            </Box>
                        </animated.div>

                        <animated.div className="trending_products" ref={refTrending} style={springPropsTrend}>
                            <span className='shop_header-text'>Bracelets</span>
                            <Box className="mt-3">
                                <ShopTrendingProductCarousel />
                            </Box>
                        </animated.div>

                        <animated.div className="trending_products" ref={refTrending} style={springPropsTrend}>
                            <span className='shop_header-text'>Necklaces</span>
                            <Box className="mt-3">
                                <ShopTrendingProductCarousel />
                            </Box>
                        </animated.div>

                    </Grid>
                </Grid>
            </Box> */}

            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            className='vertical_tabs'
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider', height: "100%", justifyContent: "center" }}
                        >
                            {["Rings", "Earrings", "Bracelets", "Necklaces"].map((items, index) => (
                                <Tab label={items} {...a11yProps(index)} />
                            ))}
                        </Tabs>
                    </Grid>
                    <Grid item xs={10}>
                        {tabsPanel.map((items, index) => (
                            <TabPanel value={value} index={items.index}>
                                {console.log(items.index, "index")}
                                {items.render}
                            </TabPanel>
                        ))}
                    </Grid>
                </Grid>
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
        </div >
    )
}

export default Shop;
