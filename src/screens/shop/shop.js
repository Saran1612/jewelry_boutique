import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Slider, Stack, Tab, Tabs } from '@mui/material';
import Footer from '../footer/footer';
import ReactStars from "react-rating-stars-component";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SearchIcon from '@mui/icons-material/Search';
import './shop.css';
import NavigationIcon from '@mui/icons-material/Navigation';
import Accordion from '@mui/material/Accordion';
import Checkbox from '@mui/material/Checkbox';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { ShopCarousel, SliderCorousel, ProductCarousel } from '../../components/carousel/carousel';
import RemoveIcon from '@mui/icons-material/Remove';
import { API } from '../../Networking/API';
import { toast } from 'react-toastify';
import { LineWave } from 'react-loader-spinner'
import Spinner from '../../utils/spinner';



const Shop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [value, setValue] = useState(1000);
    const [productData, setProductData] = useState([]);
    const [checked, setChecked] = useState([]);
    const [loadSpinner, setLoadSpinner] = useState(false);

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

    useEffect(() => {
        if (checked.length > 0) {
            setLoadSpinner(true)
            console.log(checked, "it has data");
            const categoryId = checked.map(items => items.value);
            const [one] = categoryId;
            console.log(one, "oneeneoneoene")
            API.getProductData(one).then((response) => {
                console.log(response, "respons of ring data")
                if (response.status_code === 200) {
                    setProductData(response.response.data);
                } else {
                    setProductData([]);
                    console.log(response.response.message, "failed");
                    toast.error(response.response.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                        hideProgressBar: true,
                        draggable: false,
                    });
                }
                setLoadSpinner(false)
            });
        } else {
            console.log("no datat");
            setLoadSpinner(true)
            API.getProductData().then((response) => {
                console.log(response, "respons of ring data")
                if (response.status_code === 200) {
                    setProductData(response.response.data);
                } else {
                    setProductData([]);
                    console.log(response.response.message, "failed");
                    toast.error(response.response.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        theme: "colored",
                        hideProgressBar: true,
                        draggable: false,
                    });
                }
                setLoadSpinner(false)
            });
        }

    }, [checked]);




    const checkBoxes = [
        { id: 1, label: "Earrings", default: false, value: 2 },
        { id: 2, label: "Bracelets", default: false, value: 3 },
        { id: 3, label: "Rings", default: false, value: 4 },
        { id: 4, label: "Necklace", default: false, value: 1 },
    ];

    const handleChangeCheckbox = (event, item) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            // If checked, add the item's name and value to the state
            setChecked(prevState => [...prevState, { name: item.label, value: item.value }]);
        } else {
            // If unchecked, remove the item from the state
            setChecked(prevState => prevState.filter(checkedItem => checkedItem.name !== item.label));
        }
    };
    // console.log(checked, "checkedcheckedchecked")

    const handleChangeSlider = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
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

            <Box className="tw-m-6">
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <div>
                            <span className='' style={{ textAlign: "start", margin: "15px 0px", fontWeight: "700", width: "100%", display: "flex" }}>Filter By</span>
                            <Box className="tw-mt-2">
                                <Accordion sx={{ boxShadow: "none", background: "#9F73AB" }}>
                                    <AccordionSummary
                                        expandIcon={<AddIcon sx={{ color: "#fff" }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        style={{ textAlign: "start", fontWeight: "700", color: "#fff" }}
                                    >
                                        Categories
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            {checkBoxes.map((items) => (
                                                <FormControlLabel key={items.id} className='discount_text' control={
                                                    <Checkbox
                                                        defaultChecked={items.default}
                                                        // onChange={(event) => handleChangeCheckbox(event, items.label.toLowerCase())} 
                                                        checked={checked.some(checkedItem => checkedItem.name === items.label)}
                                                        onChange={(event) => handleChangeCheckbox(event, items)}
                                                        size="small" />} label={items.label} />
                                            ))}
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box className="tw-mt-2">
                                <Accordion sx={{ boxShadow: "none", background: "#9F73AB" }}>
                                    <AccordionSummary
                                        expandIcon={<AddIcon sx={{ color: "#fff" }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        style={{ textAlign: "start", fontWeight: "700", color: "#fff" }}
                                    >
                                        Price
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                            <RemoveIcon sx={{ color: "#fff" }} />
                                            <Slider
                                                aria-label="Volume"
                                                value={value}
                                                onChange={handleChangeSlider}
                                                min={100}
                                                max={1000}
                                                valueLabelDisplay="auto"
                                                sx={{ color: "#fff" }}
                                            />
                                            <AddIcon sx={{ color: "#fff" }} />
                                        </Stack>
                                        <Box sx={{
                                            display: "flex", justifyContent: "space-between",
                                        }}>
                                            <span style={{ textAlign: "start", fontWeight: "700", width: "100%", fontSize: "12px", color: "#fff" }}>Rs.100 -</span>
                                            <span style={{ textAlign: "end", fontWeight: "700", width: "100%", fontSize: "12px", color: "#fff" }}> Rs.{value}</span>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        {loadSpinner ? <Spinner /> :
                            productData.length > 0 ? <ProductCarousel productData={productData} /> : null}
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
        </div>
    )
}

export default Shop;
