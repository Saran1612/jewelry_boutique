import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './cart.css'
import { API } from '../../Networking/API';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Cart = ({ anchor, toggleDrawer }) => {

    const [cartData, setCartData] = useState([]);
    console.log(cartData, "cartDatacartData")

    useEffect(() => {
        console.log("openoing");
        const userId = Cookies.get("userId");
        API.getCartData(
            userId
        ).then((response) => {
            console.log(response, "responsof cartr")
            if (response.status_code === 200) {
                setCartData(response.response.cartDataByUser);
                // toast.success(response.response.message, {
                //     position: toast.POSITION.TOP_RIGHT,
                //     theme: "colored",
                //     hideProgressBar: true,
                //     draggable: false,
                // });

            } else {
                setCartData([]);
                console.log(response.response.message, "failed");
                // toast.error(response.response.message, {
                //     position: toast.POSITION.TOP_RIGHT,
                //     theme: "colored",
                //     hideProgressBar: true,
                //     draggable: false,
                // });
            }
        });
    }, []);

    const handleDelete = (id) => {
        API.deleteCartData(
            id
        ).then((response) => {
            console.log(response, "response of deleteing uit")
            if (response.result.success) {
                // setCartData(response.response.cartDataByUser);
                // toast.success(response.response.message, {
                //     position: toast.POSITION.TOP_RIGHT,
                //     theme: "colored",
                //     hideProgressBar: true,
                //     draggable: false,
                // });

            } else {
                // setCartData([]);
                console.log(response.response.message, "failed");
                // toast.error(response.response.message, {
                //     position: toast.POSITION.TOP_RIGHT,
                //     theme: "colored",
                //     hideProgressBar: true,
                //     draggable: false,
                // });
            }
        });
    }

    return (
        <Box sx={{ padding: "16px 4px" }} className="cart_wrapper">
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{ textAlign: "center" }} className='your_cart-text'>Cart Items</Typography>
                <ShoppingBagOutlinedIcon sx={{ color: "#624F82" }} />
            </Box>

            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                // onKeyDown={toggleDrawer(anchor, false)}
            >
                {cartData.length !== 0 ?
                    cartData.map((text, index) => (
                        <Card sx={{ display: 'flex', margin: "30px 20px", borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120 }}
                                image="https://assets.ajio.com/medias/sys_master/root/20221228/mpQD/63ab5d0caeb269659c121770/-473Wx593H-465510082-black-MODEL.jpg"
                                alt="Live from space album cover"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                                <CardContent sx={{ flex: '1 0 auto', width: "100%", padding: "10px 16px" }}>
                                    <Box sx={{ display: 'flex', justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                                        <Typography component="div" className="product_text">
                                            {text.Product.name}
                                        </Typography>

                                        <Typography className='price_text'>{text.Product.price !== null ? text.Product.price : "$20"}</Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle1" className='description_text' >
                                            {text.Product.description}
                                        </Typography>
                                    </Box>
                                </CardContent>

                                <Box sx={{ display: 'flex', alignItems: 'center', padding: "10px 16px", width: "100%", justifyContent: "space-between" }}>
                                    <Typography className="stock_text">Stock: </Typography>
                                    <IconButton aria-label="previous">
                                        <DeleteOutlineOutlinedIcon onClick={() => { handleDelete(text.id) }} sx={{ color: "#624F82" }} />
                                    </IconButton>
                                </Box>
                            </Box>

                        </Card>
                    ))

                    : <ListItem>
                        <ListItemText primary="Cart is empty" />
                    </ListItem>}
            </Box>
            <ToastContainer transition={Flip} />
        </Box >
    )
}

export default Cart
