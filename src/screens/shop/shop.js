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
import { Banner } from '../../components/swiper/swiper';
import ReusableButton from '../../components/button/button';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';



const Shop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [priceValue, setPriceValue] = useState(1000);
    const [productData, setProductData] = useState([]);
    const [checked, setChecked] = useState([]);
    const [loadSpinner, setLoadSpinner] = useState(false);
    const [bannerData, setBannerData] = useState([]);
    const { state } = useLocation();
    // const { keyword, data } = state;
    const searchKeyword = state?.keyword;
    const searchData = state?.data;

    console.log(searchData, "uselocation")
    console.log(searchKeyword, "uselocation")



    // const searchedDataRedux = useSelector((state) => {
    //     console.log(state, 'searchedData');
    //     const { search } = state;
    //     // console.log(search, 'seasearchsearchsearchrched');
    //     // setProductData(search.searchResults)
    //     return search;
    // });

    // console.log(searchData, "searchDatasearchDatasearchData")

    const fetchBanner = () => {
        setLoadSpinner(true);
        const category_name = 'shop'
        API.getBannerData(category_name).then(({ response }) => {
            console.log(response, "respose of getBannerData in shop data")
            if (response.success) {
                setBannerData(response.data[0]);
            }
            setLoadSpinner(false);
        })
    }

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
        fetchBanner()
    }, [])

    useEffect(() => {
        if (searchKeyword === undefined && searchData === undefined) {
            fetchProduct();
        }
    }, []);

    const fetchProduct = () => {
        console.log("no datat");
        setLoadSpinner(true)
        API.getProductData().then((response) => {
            console.log(response, "respons of products data")
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

    const HandleFilterButton = () => {
        console.log(checked, "checkedthedta");
        console.log(typeof priceValue, "checkedthedta");

        setLoadSpinner(true)
        const categoryId = checked.map(items => items.value);
        console.log(categoryId, "catgoryid")

        API.getFilteredData(categoryId, priceValue).then(({ response }) => {
            console.log(response, "reposeoffiltereddara");
            if (response.success) {
                setProductData(response.data);
            } else {
                console.log(response.message, "failed");
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                    hideProgressBar: true,
                    draggable: false,
                });
                fetchProduct()
            }
            setLoadSpinner(false)
        })
    }

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
        console.log(newValue, "valeueuendjj")
        setPriceValue(newValue);
    };


    return (
        <div>
            {loadSpinner ? <Spinner /> : bannerData?.carouselImages?.length > 0 ? <Box>
                <Banner bannerData={bannerData} bannerImages={bannerData.carouselImages} />
            </Box> : null}

            {searchKeyword !== undefined ?
                <h3 className='tw-text-center tw-w-full'>Search result of keyword "{searchKeyword}"</h3> : null}

            <Box className="tw-m-6">
                <Grid container spacing={2}>
                    {searchKeyword === undefined ?
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
                                                    value={priceValue}
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
                                                <span style={{ textAlign: "end", fontWeight: "700", width: "100%", fontSize: "12px", color: "#fff" }}> Rs.{priceValue}</span>
                                            </Box>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>

                                <Box className="tw-mt-[30px]">
                                    <ReusableButton buttonName="Filter" className="view_more-button tw-w-full" onClick={HandleFilterButton} />
                                </Box>
                            </div>
                        </Grid> : null}

                    <Grid item xs={10}>
                        {loadSpinner ? <Spinner /> :
                            (searchKeyword !== "" || searchData !== undefined) && (searchData?.length > 0 || searchData !== undefined) ?
                                <ProductCarousel productData={searchData} /> :
                                productData.length > 0 ? <ProductCarousel productData={productData} /> : <h3>No data found!</h3>}
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
