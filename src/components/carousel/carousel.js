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
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


export const CarouselBanner = () => {
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
                        <div class="carousel-caption d-md-block">
                            <h1 className='banner_text-three'>Family Collections</h1>
                            <p className='banner__description-three'>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={SlideTwo} class="d-block banner" alt="..." />
                        <div class="carousel-caption-two d-md-flex">
                            <h1 className='banner_text'>Diamond Collection</h1>
                            <p className='banner__description-two mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque, odio nostrum inventore repellat.</p>
                            <ReusableButton buttonName="SHOP NOW" className="shop_now-button" startIcon={<ShoppingBagIcon />} href="/shop" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={SlideOne} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='banner_text'>Platinum Collections</h1>
                            <p className='banner__description'>Some representative placeholder content for the third slide.</p>
                        </div>
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
                        <img src={JewelOne} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three'>Contact Us</h1>
                            <p className='contact-banner__description-three'>Please do not hesitate to reach out to us for any queries or feedback. We are here to create effective solutions for any of your concerns.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Closeup} class="d-block banner" alt="..." />
                        <div class="carousel-caption-two d-md-flex">
                            <h1 className='contact-banner_text-three'>Call Us</h1>
                            <p className='contact-banner__description-three'>Please do not hesitate to reach out to us for any queries or feedback. We are here to create effective solutions for any of your concerns.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={CloseupO} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='contact-banner_text-three'>Email Us</h1>
                            <p className='contact-banner__description-three'>Please do not hesitate to reach out to us for any queries or feedback. We are here to create effective solutions for any of your concerns.</p>
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
        { id: 5, img: Peight, name: "Diamond Layered Oval", price: "200", star: "4.6" },
        { id: 6, img: ROne, name: "Diamond Octagonal Frame", price: "170", star: "3.9" },
        { id: 7, img: Psix, name: "Enchanted Disney Mulan", price: "110", star: "4" },
        { id: 8, img: Pfive, name: "Platinum Layered Oval", price: "90", star: "4.8" }

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
            autoPlaySpeed={30000000}
            infinite={true}
            customTransition="transform 1000ms ease-in-out"
            pauseOnHover={false}
            transitionDuration={1000}
            responsive={responsive}
        // className='slider_carousel'
        >
            {newProducts.map((items) => (
                <div className="card-div-home-new-product" key={items.id}>
                    <Card sx={{ maxWidth: 345 }} className="card">
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                className='card-img'
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
                                <ShoppingCartOutlinedIcon className="add-to-cart-icon left mx-5" sx={{ color: "#9F73AB" }} />
                                <FavoriteBorderIcon className="add-to-cart-icon right mx-5" sx={{ color: "#9F73AB" }} />
                            </div>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </Carousel>
    );
};


export const AboutUsCarousel = () => {
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
                        <div class="carousel-caption-two d-md-flex">
                            <h1 className='contact-banner_text-three'>About Us</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Shot} class="d-block banner" alt="..." />
                        <div class="carousel-caption-two d-md-flex">
                            <h1 className='contact-banner_text-three'>Our Vision</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={With} class="d-block banner" alt="..." />
                        <div class="carousel-caption-two d-md-flex">
                            <h1 className='contact-banner_text-three'>Our Mission</h1>
                            <p className='contact-banner__description-three'>When you gift jewellery you achieve immortality in their heart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}