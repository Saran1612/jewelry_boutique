import { Box, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DataTable } from '../../components/table/table';
import Cookies from 'js-cookie';
import { API } from '../../Networking/API';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import Spinner from '../../utils/spinner';
import { toast } from 'react-toastify';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';

const Wishlist = () => {
    const user_id = Cookies.get("userId");
    const [wishlistData, setWishlistData] = useState([])
    const [loadSpinner, setLoadSpinner] = useState(false);

    useEffect(() => {
        if (user_id) {
            fetchWishlist(user_id);
        }
    }, [])

    const fetchWishlist = (user_id) => {
        setLoadSpinner(true)
        API.getWishlistData(user_id).then(({ response }) => {
            if (response.success) {
                const format_data = response.data.map((items, index) => ({
                    id: index + 1,
                    name: items.Product.name,
                    price: `$ ${items.Product.price}`,
                    stock: items.Product.stock === true ? "Yes" : "Out of Stock",
                    description: items.Product.description,
                    image: items.Product.image,
                    product_id: items.id
                }))
                console.log(format_data, "format_data")
                setWishlistData(format_data)
            }
            setLoadSpinner(false)
        })
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'description', headerName: 'Description', flex: 1 },
        {
            field: 'price',
            headerName: 'Price',
            flex: 1,
        },
        {
            field: 'stock',
            headerName: 'Stock',
            flex: 1,
        },
        {
            field: "image",
            headerName: "Image",
            flex: 1,
            renderCell: (params) => {
                console.log(params.row, "checking the url")
                return (
                    <img src={params.row.image} alt="product_img" width="50px"
                        height="50px" />
                )
            }
        },
        {
            field: "action",
            headerName: "Delete",
            flex: 1,
            renderCell: (params) => {
                return (
                    <IconButton aria-label="cart" onClick={() => handleDeleteClick(params.row.product_id)}>
                        <DeleteTwoToneIcon sx={{ color: "#9F73AB" }} />
                    </IconButton>
                )
            }
        }
    ];

    const handleDeleteClick = (id) => {
        API.deleteWishlistProducts(id).then(({ result }) => {
            console.log(result, "response of deleting the wishlist")
            setLoadSpinner(true)
            if (result.success) {
                toast.success(result.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: true,
                    draggable: false,
                });
                fetchWishlist(user_id);
            } else {
                toast.error(result.message, {
                    position: toast.POSITION.TOP_LEFT,
                    theme: "light",
                    hideProgressBar: false,
                    draggable: false,
                });
            }
            setLoadSpinner(false)
        })
    }

    return (
        <div>
            <div className='tw-flex tw-justify-start tw-mx-[60px]'>
                <h2>Wishlist</h2>
            </div>

            {loadSpinner ? <Spinner /> : wishlistData.length > 0 ?
                <Box style={{ width: '100%', display: "flex", justifyContent: "center" }}>
                    <Box style={{ height: 425, overflowY: "", width: '85%', margin: "40px 0px" }}>
                        <DataTable
                            rows={wishlistData}
                            columns={columns}
                            rowHeight="80px"
                            // autoHeight={true}
                            sx={{}}
                            className=""
                            // hideFooter={true}
                            hideFooterPagination={true}
                            hideFooterSelectedRowCount={true}
                        />
                    </Box>
                </Box>
                : <Box sx={{ height: "30vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <span>No Wishlist Data Found <LocalMallTwoToneIcon sx={{ color: "#9F73AB" }} /></span>
                </Box>
            }


        </div>
    )
}

export default Wishlist
