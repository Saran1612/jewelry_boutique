import React from 'react';
import SlideOne from '../../assests/header/one.jpg';
import SlideTwo from '../../assests/header/two.jpg';
import SlideThree from '../../assests/header/three.jpg';
// import SlideFour from '../../assests/header/four.jpg';
import ReusableButton from '../../components/button/button';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './carousel.css';


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
                            <ReusableButton buttonName="SHOP NOW" className="shop_now-button" startIcon={<ShoppingBagIcon/>} href="/shop"/>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={SlideOne} class="d-block banner" alt="..." />
                        <div class="carousel-caption d-md-block">
                            <h1 className='banner_text'>Platinum Collections</h1>
                            <p className='banner__description'>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    {/* <div class="carousel-item">
                        <img src={SlideFour} class="d-block banner" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Four slide label</h1>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div> */}
                </div>
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    )
}


