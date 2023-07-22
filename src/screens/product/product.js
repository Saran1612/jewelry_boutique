import React, { useEffect, useState } from "react";
import Header from '../header/header';
import Footer from "../footer/footer";
import TelegramIcon from '@mui/icons-material/Telegram';
import Grid from "@mui/material/Grid";
import "./product.css";
import Menu from "@mui/material/Menu";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ReactStars from "react-rating-stars-component";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled, alpha } from "@mui/material/styles";
import Six from '../../assests/newProd/f.jpg';
import Seven from '../../assests/newProd/g.jpg';
import Eight from '../../assests/newProd/e.jpg';
import Nine from '../../assests/newProd/l.jpg';
import Ten from '../../assests/newProd/j.jpg';
import { CardActionArea, IconButton } from "@mui/material";
import { ShopCarousel } from "../../components/carousel/carousel";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NavigationIcon from '@mui/icons-material/Navigation';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';



const cornerData = [
    { id: 1, foto: Six, topic: "Diamond Oval", price: "$180.00" },
    { id: 2, foto: Seven, topic: "Bulova Jewelry", price: "$99.00" },
    { id: 3, foto: Eight, topic: "Cultured Pearl", price: "$165.00" },
];

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

export const Products = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // const location = useLocation();
    // const data = location.state;
    // console.log(data, "props-data");
    // const[prodData , setProdData] = useState([]);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

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

    const featuredData = [
        { id: 1, img: Ten, name: "Brilliance Bead", price: "130", star: "4.5" },
        { id: 2, img: Eight, name: "Bulova Jewelry", price: "150", star: "4" },
        { id: 3, img: Nine, name: "Cultured Freshwater Pearl", price: "190", star: "4.7" },
    ];

    //Product-images
    const [refProduct, inViewProduct] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });

    const springPropsProduct = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewProduct ? 1 : 0, transform: inViewProduct ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 900 },
    });

    //Product-description
    const [refDescription, inViewDescription] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });

    const springPropsDescription = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewDescription ? 1 : 0, transform: inViewDescription ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 900 },
        delay: 500
    });


    //Product-featured
    const [refFeatured, inViewFeatured] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });

    const springPropsFeatured = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewFeatured ? 1 : 0, transform: inViewFeatured ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 900 },
        delay: 500
    });


    //Product-featuredProd
    const [refFeaturedProd, inViewFeaturedProd] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.2, // Percentage of element visibility required to trigger the animation
    });

    const springPropsFeaturedProd = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewFeaturedProd ? 1 : 0, transform: inViewFeaturedProd ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 900 },
        delay: 500
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


    //Home-FilterDiscount
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

    return (
        <div>
            <Box>
                <Header />
            </Box>

            <Box>
                <ShopCarousel />
            </Box>


            <div className="products-wrapper">
                {/* ///mobile */}
                <Box
                    className="Mobile_screen"
                    sx={{
                        justifyContent: "end",
                        width: "100%",
                        padding: "20px 40px 0px 40px",
                        display: { xs: "flex", sm: "flex", md: "none" },
                    }}
                >
                    <Button
                        id="demo-customized-button"
                        aria-controls={open ? "demo-customized-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        className="filter-button"
                    >
                        Filter
                    </Button>
                    <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                            "aria-labelledby": "demo-customized-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >

                        <div style={{ padding: "20px 50px 0px 50px", margin: "20px 0px" }}>
                            <div className="product-search-bar" style={{ width: "100%" }}>

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
                                <div className="product-occasion-div">
                                    <span className="special-deals-text mb-2">occasion</span>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Rings"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Pendant" />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Necklaces"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel control={<Checkbox />} label="Earrings" />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="Bracelets"
                                            onClick={handleClose}
                                        />
                                    </FormGroup>
                                </div>

                                <div className="product-occasion-div mt-4">
                                    <span className="special-deals-text mb-2">DISCOUNT</span>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="5% or More"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="10% or More"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="20% or More"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="30% or More"
                                            onClick={handleClose}
                                        />
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="50% or More"
                                            onClick={handleClose}
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
                            </div>
                        </div>
                    </StyledMenu>
                </Box>

                {/* // web */}
                <div className="products-content-div">
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={3}
                            sx={{ display: { xs: "none", sm: "none", md: "block" } }} >
                            <div style={{ padding: "0px 50px 0px 0px" }}>
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
                                    <animated.div className="product-occasion-div" ref={refDiscount} style={springPropsDiscount}>
                                        <span className="special-deals-text mb-2">CATEGORIES</span>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Rings"
                                                onClick={handleClose}
                                            />
                                            <FormControlLabel control={<Checkbox />} label="Pendant" />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Necklaces"
                                                onClick={handleClose}
                                            />
                                            <FormControlLabel control={<Checkbox />} label="Earrings" />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="Bracelets"
                                                onClick={handleClose}
                                            />
                                        </FormGroup>
                                    </animated.div>

                                    {/* <div className="product-occasion-div mt-4">
                                        <span className="special-deals-text mb-2">DISCOUNT</span>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="5% or More"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="10% or More"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="20% or More"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="30% or More"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox />}
                                                label="50% or More"
                                            />
                                        </FormGroup>
                                    </div> */}

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
                                            SPECIAL DEALS
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

                        <Grid item xs={12} sm={12} md={9}>
                            <div>
                                <animated.div className="specific__products" ref={refProduct} style={springPropsProduct}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <div style={{ border: "1px solid #ced4da" }}>
                                                <img
                                                    src={Six}
                                                    alt="shoe"
                                                    width="290"
                                                    height="300"
                                                    style={{ padding: "18px" }}
                                                />
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={6}>
                                            <div>
                                                <span className="product-check-text">
                                                    Patia Platinum And Rose Gold Chain
                                                </span>
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        display: "flex",
                                                        justifyContent: "start",
                                                        alignItems: "baseline",
                                                    }}
                                                >
                                                    <span className="product-description-price-text">
                                                        $ 299
                                                    </span>
                                                    <span style={{ textDecoration: "line-through" }} className="product-description-price-text-strike">
                                                        $ 599
                                                    </span>
                                                    <span className="product-description-price-text-a">
                                                        Click For Offer
                                                    </span>

                                                </div>

                                                <div style={{
                                                    width: "100%",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "baseline",
                                                }}>
                                                    <span className="product-description-avai-text">Availability:{" "} <span className="product-description-avai-text purple">In Stock</span></span>
                                                </div>


                                                <div className="product-search-bar" style={{ width: "100%", margin: "16px 0px " }}>

                                                    <div style={{ display: "flex", width: "70%" }}>
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Your Email"
                                                            name="search"
                                                            className="product-input-field"
                                                        />
                                                        <IconButton className="edit-icon-search">
                                                            <TelegramIcon sx={{ fontSize: "1.3rem !important" }} />
                                                        </IconButton>
                                                    </div>
                                                </div>

                                                <span className="product-description-text mt-2 mt-2">
                                                    Lorem Ipsum has been the industry's standard since the
                                                    1500s. Praesent ullamcorper dui turpis..
                                                </span>
                                                <Box className="social-media-content-wrapper mt-3">
                                                    <span className="social-media-text">
                                                        Share Product
                                                    </span>
                                                    <Box className="social-media-icons-wrapper">
                                                        <ul
                                                            style={{
                                                                listStyle: "none",
                                                                display: "flex",
                                                                padding: "0px",
                                                            }}
                                                        >
                                                            <li className='explore_list'><FacebookIcon className='product_icon' /></li>
                                                            <li className='explore_list'><InstagramIcon className='product_icon' /></li>
                                                            <li className='explore_list'> <TwitterIcon className='product_icon' /></li>
                                                            <li className='explore_list'><WhatsAppIcon className='product_icon' /></li>
                                                            <li className='explore_list'><YouTubeIcon className='product_icon' /></li>
                                                        </ul>
                                                    </Box>
                                                </Box>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </animated.div>

                                <div className="product-description-below-div">

                                    <animated.div className="description-box" ref={refDescription} style={springPropsDescription}>
                                        <span className="lorem-ipsum-header-text mb-4">
                                            Description
                                        </span>

                                        <span className="lorem-text-one">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elPellentesque vehicula augue eget nisl ullamcorper,
                                            molestie blandit ipsum auctor. Mauris volutpat augue
                                            dolor.Consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco. labore et
                                            dolore magna aliqua.
                                        </span>

                                        <span className="lorem-text-one mt-2 mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elPellentesque vehicula augue eget nisl ullamcorper,
                                            molestie blandit ipsum auctor. Mauris volutpat augue dolor.
                                            Consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco. labore et
                                            dolore magna aliqua.
                                        </span>
                                    </animated.div>

                                    <animated.div className="feature-text-box" ref={refFeatured} style={springPropsFeatured}>
                                        <span className="featured-products-text mt-2">
                                            FEATURED PRODUCTS
                                        </span>
                                    </animated.div>

                                    <animated.div className="product-wrapper-div" ref={refFeaturedProd} style={springPropsFeaturedProd}>
                                        <Grid container spacing={2}>
                                            {featuredData.map((items) => (
                                                <Grid item xs={12} sm={12} md={4} lg={4} className="product_game">
                                                    <div className="card-div-home-new-product-featured" key={items.id}>
                                                        <Link to="/products" style={{ textDecoration: "none" }}>
                                                            <Card className="card" sx={{ maxWidth: 345 }}>
                                                                <CardActionArea>
                                                                    <CardMedia
                                                                        component="img"
                                                                        className='card-img-featured'
                                                                        height="260"
                                                                        image={items.img}
                                                                        alt={items.name}
                                                                    />
                                                                    <CardContent className="card_content">
                                                                        <Box sx={{ width: "100%" }}>
                                                                            <span className="product_text">{items.name}</span>
                                                                        </Box>
                                                                        <Box
                                                                            sx={{
                                                                                width: "100%",
                                                                                display: "flex",
                                                                                justifyContent: "space-between",
                                                                                marginTop: "5px",
                                                                                alignItems: "center"
                                                                            }}
                                                                        >
                                                                            <span className="price_text">${items.price}</span>
                                                                            <span className="price_text">
                                                                                {items.star}
                                                                                <StarIcon style={{ color: "#9F73AB", fontSize: "1rem" }} />
                                                                            </span>
                                                                        </Box>
                                                                    </CardContent>
                                                                    <div className="hover-icons">
                                                                        <ShoppingCartOutlinedIcon className="add-to-cart-icon left" sx={{ color: "#9F73AB" }} />
                                                                        <FavoriteBorderIcon className="add-to-cart-icon right" sx={{ color: "#9F73AB" }} />
                                                                    </div>
                                                                </CardActionArea>
                                                            </Card>
                                                        </Link>
                                                    </div>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </animated.div>

                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

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
    );
};
