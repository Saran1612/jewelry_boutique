import React from 'react';
import SlideOne from '../../assests/header/one.jpg';
import SlideTwo from '../../assests/header/two.jpg';
import SlideThree from '../../assests/header/three.jpg';
import Closeup from '../../assests/header/contact-one.jpg';
import CloseupO from '../../assests/header/contact-two.jpg'
import JewelOne from '../../assests/header/jewelOne.jpg';
import Carousel from "react-multi-carousel";
import ReusableButton from '../button/button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Apoorva from '../../assests/contact_carousel/apoorva.svg';
import Glo from '../../assests/contact_carousel/glo.svg';
import Hera from '../../assests/contact_carousel/hera.svg';
import Laya from '../../assests/contact_carousel/laya.svg';
import Mudhra from '../../assests/contact_carousel/mudhra.svg';
import Nimah from '../../assests/contact_carousel/nimah.svg';
import Teju from '../../assests/contact_carousel/tejasvi.svg';
import Vedha from '../../assests/contact_carousel/vedha.svg';
import Ziah from '../../assests/contact_carousel/ziah.svg';
import With from '../../assests/header/done.jpg';
import Shot from '../../assests/header/tada.jpg';
import Ready from '../../assests/header/ready.jpg';
import Bone from '../../assests/shop/bracelet_one.jpg';
import ROne from '../../assests/shop/prod_two.jpg';
import PTen from '../../assests/shop/prod_ten.jpg';
import BThree from '../../assests/shop/bracelet_three.jpg';
import PChain from '../../assests/shop/prod_chain.jpg'
import Peight from '../../assests/shop/prod_eight.jpg';
import Psix from '../../assests/shop/prod_six.jpg';
import Pfive from '../../assests/shop/prod_five.jpg';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './carousel.css';
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardActionArea, CardContent, CardMedia, IconButton } from '@mui/material';



// -----featured--------
import FOne from '../../assests/featured/ff.jpg';
import FTwo from '../../assests/featured/gg.jpg';
import FThree from '../../assests/featured/ggOne.jpg';
import FFour from '../../assests/featured/hh.jpg';
import FFive from '../../assests/featured/kick.jpg';
import FSeven from '../../assests/featured/nj.jpg';
import FEight from '../../assests/featured/prod_four.jpg';
import FNine from '../../assests/featured/prod_nine.jpg';


// new products
import One from '../../assests/newProd/a.jpg';
import Two from '../../assests/newProd/b.jpg';
import Three from '../../assests/newProd/c.jpg';
import Four from '../../assests/newProd/d.jpg';
import Five from '../../assests/newProd/e.jpg';
import Six from '../../assests/newProd/f.jpg';
import Seven from '../../assests/newProd/g.jpg';
import Eight from '../../assests/newProd/h.jpg';
import Nine from '../../assests/newProd/l.jpg';
import Ten from '../../assests/newProd/j.jpg';


// trending products
import FSix from '../../assests/featured/kkk.jpg';
import POne from '../../assests/newProd/a.jpg';
import PTwo from '../../assests/newProd/b.jpg';
import PThree from '../../assests/newProd/c.jpg';
import PFour from '../../assests/newProd/d.jpg';
import PFive from '../../assests/newProd/e.jpg';
import PSix from '../../assests/newProd/f.jpg';
import PSeven from '../../assests/newProd/g.jpg';
import PEight from '../../assests/newProd/h.jpg';


//shopcarousel
import ShopOne from '../../assests/header/shopOne.jpg';
import ShopTwo from '../../assests/header/shopTwo.jpg';
import ShopThree from '../../assests/header/shopThree.jpg';
import { Link } from 'react-router-dom';


import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';


export const CarouselBanner = () => {

    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 800 },
    });


    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={SlideThree} class="d-block banner" alt="..." />

                        <animated.div style={springProps} class="carousel-caption d-md-block">
                            <h1 className='banner_text-three'>Family Collections</h1>
                            <p className='banner__description-three'>Some representative placeholder content for the first slide.</p>
                        </animated.div>
                    </div>
                    <div class="carousel-item">
                        <img src={SlideTwo} class="d-block banner" alt="..." />
                        <animated.div style={springProps} class="carousel-caption-two d-md-flex">
                            <h1 className='banner_text'>Diamond Collection</h1>
                            <p className='banner__description-two mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque, odio nostrum inventore repellat.</p>
                            <ReusableButton buttonName="SHOP NOW" className="shop_now-button" startIcon={<ShoppingBagIcon />} href="/shop" />
                        </animated.div>
                    </div>
                    <div class="carousel-item">
                        <img src={SlideOne} class="d-block banner" alt="..." />
                        <animated.div style={springProps} class="carousel-caption d-md-block">
                            <h1 className='banner_text'>Platinum Collections</h1>
                            <p className='banner__description'>Some representative placeholder content for the third slide.</p>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SliderCorousel = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            shouldResetAutoplay
            slidesToSlide={1}
            autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={2000}
            infinite={true}
            customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            transitionDuration={1000}
            responsive={responsive}
            className='slider_carousel'
        >
            <div className="card-div">
                <img src={Apoorva} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Glo} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Hera} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Laya} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Mudhra} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Nimah} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Teju} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Vedha} alt='apoorva' className='slider_img' />
            </div>
            <div className="card-div">
                <img src={Ziah} alt='apoorva' className='slider_img' />
            </div>
        </Carousel>
    );
};

export const ContactCarousel = () => {

    //About-carousel
    const [refContact, inViewContact] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springContactCarousel = useSpring({
        from: { opacity: 0, transform: 'translate3d(-200px,0,0)' },
        to: { opacity: inViewContact ? 1 : 0, transform: inViewContact ? 'translate3d(0,0,0)' : 'translate3d(-200px,0,0)' },
        config: { duration: 900 },
    });

    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={JewelOne} class="d-block banner" alt="..." />
                        <animated.div class="carousel-caption d-md-block" ref={refContact} style={springContactCarousel}>
                            <h1 className='contact-banner_text-three'>Contact Us</h1>
                            <p className='contact-banner__description-three'>Please do not hesitate to reach out to us for any queries or feedback. We are here to create effective solutions for any of your concerns.</p>
                        </animated.div>
                    </div>
                    <div class="carousel-item">
                        <img src={Closeup} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three'>Call Us</h1>
                            <p className='contact-banner__description-three'>We are here to create effective solutions for any of your concerns.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={CloseupO} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three email'>Email Us</h1>
                            <p className='contact-banner__description-three email'>Please do not hesitate to reach out to us for any queries or feedback.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const HomeNewProductCarousel = () => {

    const newProducts = [
        { id: 1, img: Bone, name: "Brilliance Bead", price: "130", star: "4.5" },
        { id: 2, img: PChain, name: "Bulova Jewelry", price: "150", star: "4" },
        { id: 3, img: PTen, name: "Cultured Freshwater Pearl", price: "190", star: "4.7" },
        { id: 4, img: BThree, name: "Customize Gemstone Ring", price: "70", star: "4.2" },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    const handleCartClick = (product_id) => {

    }

    return (

        <Carousel
            // additionalTransfrom={0}
            // arrows
            // shouldResetAutoplay
            // slidesToSlide={1}
            // autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={3000}
            // infinite={true}
            // customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            // transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product" key={items.id}>
                    {/* <Link to="/products" style={{ textDecoration: "none" }}> */}
                    <Card sx={{ maxWidth: 345 }} className="card">
                        <CardActionArea>
                            <Link to="/user/products" style={{ textDecoration: "none" }}>
                                <CardMedia
                                    component="img"
                                    className='card-img'
                                    height="260"
                                    image={items.img}
                                    alt={items.name}
                                />
                            </Link>
                            <CardContent className="card_content">
                                <Link to="/user/products" style={{ textDecoration: "none" }}>
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
                                </Link>
                                <div className="hover-icons" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                    <IconButton aria-label="cart" onClick={() => handleCartClick(items.id)}>
                                        <ShoppingCartOutlinedIcon className="add-to-cart-icon left" sx={{ color: "#9F73AB" }} />
                                    </IconButton>

                                    <IconButton aria-label="favourite">
                                        <FavoriteBorderIcon className="add-to-cart-icon right" sx={{ color: "#9F73AB" }} />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    {/* </Link> */}
                </div>
            ))}
        </Carousel>
    );
};

export const HomeTopSaleCarousel = () => {

    const newProducts = [
        { id: 1, img: Peight, name: "Diamond Layered Oval", price: "200", star: "4.6" },
        { id: 2, img: ROne, name: "Diamond Octagonal Frame", price: "170", star: "3.9" },
        { id: 3, img: Psix, name: "Enchanted Disney Mulan", price: "110", star: "4" },
        { id: 4, img: Pfive, name: "Platinum Layered Oval", price: "90", star: "4.8" }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel
            // additionalTransfrom={0}
            // arrows
            // shouldResetAutoplay
            // slidesToSlide={1}
            // autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={3000}
            // infinite={true}
            // customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            // transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product" key={items.id}>
                    <Card sx={{ maxWidth: 345 }} className="card">
                        <CardActionArea>
                            <Link to="/user/products" style={{ textDecoration: "none" }}>
                                <CardMedia
                                    component="img"
                                    className='card-img'
                                    height="260"
                                    image={items.img}
                                    alt={items.name}
                                />
                            </Link>
                            <CardContent className="card_content">
                                <Link to="/user/products" style={{ textDecoration: "none" }}>
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
                                </Link>
                                <div className="hover-icons" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                    <IconButton aria-label="cart">
                                        <ShoppingCartOutlinedIcon className="add-to-cart-icon left" sx={{ color: "#9F73AB" }} />
                                    </IconButton>

                                    <IconButton aria-label="favourite">
                                        <FavoriteBorderIcon className="add-to-cart-icon right" sx={{ color: "#9F73AB" }} />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </Carousel>
    );
};


export const HomeBestSaleCarousel = () => {

    const newProducts = [
        { id: 1, img: Peight, name: "Diamond Layered Oval", price: "200", star: "4.6" },
        { id: 2, img: ROne, name: "Diamond Octagonal Frame", price: "170", star: "3.9" },
        { id: 3, img: Psix, name: "Enchanted Disney Mulan", price: "110", star: "4" },
        { id: 4, img: Pfive, name: "Platinum Layered Oval", price: "90", star: "4.8" }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel
            // additionalTransfrom={0}
            // arrows
            // shouldResetAutoplay
            // slidesToSlide={1}
            // autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={3000}
            // infinite={true}
            // customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            // transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product" key={items.id}>
                    <Card sx={{ maxWidth: 345 }} className="card">
                        <CardActionArea>
                            <Link to="/user/products" style={{ textDecoration: "none" }}>
                                <CardMedia
                                    component="img"
                                    className='card-img'
                                    height="260"
                                    image={items.img}
                                    alt={items.name}
                                />
                            </Link>
                            <CardContent className="card_content">
                                <Link to="/user/products" style={{ textDecoration: "none" }}>
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
                                </Link>
                                <div className="hover-icons" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
                                    <IconButton aria-label="cart">
                                        <ShoppingCartOutlinedIcon className="add-to-cart-icon left" sx={{ color: "#9F73AB" }} />
                                    </IconButton>

                                    <IconButton aria-label="favourite">
                                        <FavoriteBorderIcon className="add-to-cart-icon right" sx={{ color: "#9F73AB" }} />
                                    </IconButton>
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </Carousel>
    );
};


export const ShopFeaturedProductCarousel = () => {

    const featuredProducts = [
        { id: 1, img: FOne, name: "Brilliance Bead", price: "130", star: "4.5" },
        { id: 2, img: FTwo, name: "Bulova Jewelry", price: "150", star: "4" },
        { id: 3, img: FThree, name: "Cultured Pearl", price: "190", star: "4.7" },
        { id: 4, img: FFour, name: "Gemstone Ring", price: "70", star: "4.2" },
        { id: 5, img: FFive, name: "Diamond Oval", price: "200", star: "4.6" },
        { id: 6, img: FSeven, name: "Diamond Octagonal", price: "170", star: "3.9" },
        // { id: 7, img: FEight, name: "Enchanted Disney", price: "110", star: "4" },
        { id: 8, img: FNine, name: "Platinum Oval", price: "90", star: "4.8" }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel
            // additionalTransfrom={0}
            // arrows
            // shouldResetAutoplay
            // slidesToSlide={1}
            // autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={6000}
            // infinite={true}
            // customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            // transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {featuredProducts.map((items) => (
                <div className="card-div-home-new-product-featured" key={items.id}>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <Card className="card">
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
            ))}
        </Carousel>
    );
};

export const ShopNewProductCarousel = () => {

    const newProducts = [
        { id: 1, img: One, name: "Brilliance Bead", price: "130", star: "4.5" },
        { id: 2, img: Two, name: "Bulova Jewelry", price: "150", star: "4" },
        { id: 3, img: Three, name: "Cultured Pearl", price: "190", star: "4.7" },
        { id: 4, img: Four, name: "Gemstone Ring", price: "70", star: "4.2" },
        { id: 5, img: Five, name: "Diamond Oval", price: "200", star: "4.6" },
        { id: 6, img: Six, name: "Platinum Oval", price: "90", star: "4.8" },
        { id: 7, img: Seven, name: "Diamond Octagonal", price: "170", star: "3.9" },
        { id: 8, img: Eight, name: "Enchanted Disney", price: "110", star: "4" },
        { id: 9, img: Nine, name: "Platinum Oval", price: "90", star: "4.8" },
        { id: 10, img: Ten, name: "Platinum Oval", price: "90", star: "4.8" }
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            shouldResetAutoplay
            slidesToSlide={1}
            autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={6000}
            infinite={true}
            customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product-featured" key={items.id}>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <Card className="card">
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
                                    <ShoppingCartOutlinedIcon className="add-to-cart-icon left " sx={{ color: "#9F73AB" }} />
                                    <FavoriteBorderIcon className="add-to-cart-icon right" sx={{ color: "#9F73AB" }} />
                                </div>
                            </CardActionArea>
                        </Card>
                    </Link>
                </div>
            ))}
        </Carousel>
    );
};

export const ShopTrendingProductCarousel = () => {

    const newProducts = [
        { id: 1, img: POne, name: "Brilliance Bead", price: "130", star: "4.5" },
        { id: 2, img: PTwo, name: "Bulova Jewelry", price: "150", star: "4" },
        { id: 3, img: PThree, name: "Cultured Pearl", price: "190", star: "4.7" },
        { id: 4, img: PFour, name: "Gemstone Ring", price: "70", star: "4.2" },
        { id: 5, img: PFive, name: "Diamond Oval", price: "200", star: "4.6" },
        { id: 6, img: PSix, name: "Platinum Oval", price: "90", star: "4.8" },
        { id: 7, img: PSeven, name: "Diamond Octagonal", price: "170", star: "3.9" },
        { id: 8, img: PEight, name: "Enchanted Disney", price: "110", star: "4" },
        { id: 9, img: FSix, name: "Platinum Oval", price: "90", star: "4.8" },
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1280 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4,
        },
        laptop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 425 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 425, min: 0 },
            items: 1,
        },
    };

    return (

        <Carousel
            additionalTransfrom={0}
            arrows
            shouldResetAutoplay
            slidesToSlide={1}
            autoPlay
            customLeftArrow={<ChevronLeftIcon />}
            customRightArrow={<ChevronRightIcon />}
            autoPlaySpeed={2000}
            infinite={true}
            customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product-featured" key={items.id}>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <Card className="card">
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
                                    <FavoriteBorderIcon className="add-to-cart-icon right " sx={{ color: "#9F73AB" }} />
                                </div>
                            </CardActionArea>
                        </Card>
                    </Link>
                </div>
            ))}
        </Carousel>
    );
};

export const AboutUsCarousel = () => {

    //About-carousel
    const [refAbout, inViewAbout] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springAboutCarousel = useSpring({
        from: { opacity: 0, transform: 'translateX(-200px)' },
        to: { opacity: 1, transform: 'translateX(0px)' },
        config: { duration: 800 },
    });

    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Ready} class="d-block banner" alt="..." />
                        <animated.div class="carousel-caption d-md-block" ref={refAbout} style={springAboutCarousel}>
                            <h1 className='contact-banner_text-three'>About Us</h1>
                            <p className='contact-banner__description-three'>Learn about our tales!</p>
                        </animated.div>
                    </div>

                    <div class="carousel-item">
                        <img src={Shot} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three'>Our Vision</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={With} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three'>Our Mission</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ShopCarousel = () => {

    //Home-Tab
    const [refTab, inViewTab] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springShopCarousel = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,100px,0)' },
        to: { opacity: inViewTab ? 1 : 0, transform: inViewTab ? 'translate3d(0,0,0)' : 'translate3d(0,100px,0)' },
        config: { duration: 750 }, // Adjust the duration as needed
    });

    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={ShopOne} class="d-block banner" alt="..." />
                        <animated.div class="shop-carousel-edit d-md-flex" ref={refTab} style={springShopCarousel}>
                            <h1 className='contact-banner_text-three'>Shop With Us</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </animated.div>
                    </div>
                    <div class="carousel-item">
                        <img src={ShopTwo} class="d-block banner" alt="..." />
                        <animated.div class="shop-carousel-edit d-md-flex" >
                            <h1 className='contact-banner_text-three'>Explore</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </animated.div>
                    </div>
                    <div class="carousel-item">
                        <img src={ShopThree} class="d-block banner" alt="..." />
                        <div class="shop-carousel-edit d-md-flex">
                            <h1 className='contact-banner_text-three'>Our Mission</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}