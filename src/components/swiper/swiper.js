// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import './swiper.css';
import { Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ReactStars from "react-rating-stars-component";
import 'swiper/element/css/autoplay'

import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
register();


export function Usage({ reviewsData }) {

    console.log(reviewsData, "reviewsData");

    return (
        // <>
        //     <main style={{ width: "100%" }}>
        //         <swiper-container navigation="true" speed="500" loop="true" css-mode="true" autoplay={{ delay: 5000 }}>
        //             {reviewsData?.map((items) => (
        //                 <swiper-slide key={items.id} style={{ width: "100%" }}>
        // <Box
        //     className="middle-content-wrapper-inner">
        //     <span className="my-md-2 my-3 quotes-header">{items.name}</span>
        //     <ReactStars
        //         classNames="middle-content-stars"
        //         count={4}
        //         size={20}
        //         value={items.rating}
        //         isHalf={true}
        //     />
        //     <p className="middle-text">
        //         <span className="content-quotes">
        //             <FormatQuoteIcon /> {items.message}  <FormatQuoteIcon />
        //         </span>
        //     </p>
        // </Box>
        //                 </swiper-slide>
        //             ))}
        //         </swiper-container>
        //     </main>
        // </>
        <CCarousel controls transition="slide" interval={true} indicators={true}>
            {reviewsData?.map((items) => (
                <CCarouselItem>
                    <Box
                        className="middle-content-wrapper-inner">
                        <span className="my-md-2 my-3 quotes-header">{items.name}</span>
                        <ReactStars
                            classNames="middle-content-stars"
                            count={4}
                            size={20}
                            value={items.rating}
                            isHalf={true}
                        />
                        <p className="middle-text">
                            <span className="content-quotes">
                                <FormatQuoteIcon /> {items.message}  <FormatQuoteIcon />
                            </span>
                        </p>
                    </Box>
                </CCarouselItem>
            ))}
        </CCarousel>
    )
}

export function Banner({ bannerData, bannerImages }) {
    console.log(bannerData, "lfoflfl")
    return (
        <CCarousel controls transition="slide" interval={true} indicators={true}>
            {bannerImages?.map((items) => (
                <CCarouselItem interval={true}>
                    <CImage src={items.image} className="d-block banner" alt={items.category}></CImage>
                    <CCarouselCaption>
                        <h1 className='banner_text-three'>{bannerData.name}</h1>
                        <p className='banner__description-three'>{bannerData.description}</p>
                    </CCarouselCaption>
                </CCarouselItem>
            ))
            }
        </CCarousel>
    )
}