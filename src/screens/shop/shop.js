import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import { Box, Card, CardContent, CardMedia, Grid, IconButton } from '@mui/material';
import Footer from '../footer/footer';
import ReactStars from "react-rating-stars-component";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from '@mui/icons-material/Search';
import './shop.css';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from "@mui/material/Checkbox";
import { ShopCarousel, ShopFeaturedProductCarousel, ShopNewProductCarousel, ShopTrendingProductCarousel, SliderCorousel } from '../../components/carousel/carousel';

// new products

import Six from '../../assests/newProd/f.jpg';
import Seven from '../../assests/newProd/g.jpg';
import Eight from '../../assests/newProd/e.jpg';
import Nine from '../../assests/newProd/l.jpg';
import Ten from '../../assests/newProd/j.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {

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
                <ShopCarousel />
            </Box>

            <Box>
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

                            <div className="product-search-bar" style={{ width: "100%" }}>
                                {/* <span className="product-search-text">SEARCH HERE...</span> */}
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
                            </div>

                            <div className="product-radio-box-content mt-4">

                                <div className="product-occasion-div mt-4">
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
                                </div>

                                <div className="product-review-div mt-4">
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
                                </div>

                                <div className='related_product mt-4'>

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
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <Box className="m-4">
                            <span className='shop_header-text'>Featured products</span>
                            <Box className="mt-3">
                                <ShopFeaturedProductCarousel />
                            </Box>
                        </Box>

                        <Box className="new_products">
                            <span className='shop_header-text'>New products</span>
                            <Box className="mt-3">
                                <ShopNewProductCarousel />
                            </Box>
                        </Box>

                        <Box className="trending_products">
                            <span className='shop_header-text'>Trending products</span>
                            <Box className="mt-3">
                                <ShopTrendingProductCarousel />
                            </Box>
                        </Box>

                    </Grid>
                </Grid>
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
        </div >
    )
}

export default Shop;
