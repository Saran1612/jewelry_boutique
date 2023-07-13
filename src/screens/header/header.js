import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReusableButton from '../../components/button/button';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../assests/logo/icons8-sparkling-diamond-100.png';
import Logo1 from '../../assests/logo/icons8-jewel-64.png';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const navItems = [
    { id: 1, label: 'Home', route: "/", icon: <HomeIcon /> },
    { id: 2, label: 'Shop', route: "/shop", icon: <ShoppingBagIcon /> },
    { id: 3, label: 'About', route: "/about", icon: <InfoIcon /> },
    { id: 4, label: 'Contact', route: "/contact", icon: <CallIcon /> }
];

const navItemsDataOne = [
    { id: 1, label: 'Home', route: "/", icon: <HomeIcon /> },
    { id: 2, label: 'Shop', route: "/shop", icon: <ShoppingBagIcon /> },
];

const navItemsDataTwo = [
    { id: 1, label: 'About', route: "/about", icon: <InfoIcon /> },
    { id: 2, label: 'Contact', route: "/contact", icon: <CallIcon /> }
];

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };




    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2, display: "flex", justifyContent: "center" }}>
                <img src={Logo1} alt='logo' className='header_logo' />
                <Box sx={{ display: "flex", flexDirection: "column", padding: "0px 12px" }}>
                    <span className='header__text'>Jane's</span>
                    <span className='header__subtext'>Boutique</span>
                </Box>
            </Box>
            <Divider />
            <ul style={{ padding: "0" }}>
                {navItems.map((item) => (
                    <li style={{ listStyle: "none", padding: "10px 20px", display: "flex", justifyContent: "start" }}>
                        <ReusableButton key={item.id} className="header_menu-cart-mobile" sx={{ color: '#fff', padding: "0px 25px" }} buttonName={item.label} href={item.route} startIcon={item.icon} />
                    </li>
                ))}
            </ul>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height: "0px" }}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar component="nav" sx={{ background: "#fff", boxShadow: "none" }}>
                    <Toolbar className='header_toolbar' >
                        <IconButton
                            color="#4D455D"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, color: "#4D455D" }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            {navItemsDataOne.map((item) => (
                                <ReusableButton key={item.id} className="header_menu-cart" sx={{ color: '#000', padding: "0px 25px" }} buttonName={item.label} href={item.route} startIcon={item.icon} />
                            ))}
                        </Box>


                        <Box sx={{ display: { xs: 'flex', sm: 'flex' }, justifyContent: "center", alignItems: "center", width: { xs: '100%', sm: 'auto' }, marginRight: { xs: "8%", sm: "0%" }, margin: { sm: "0% 2%", md: "0% 2%", lg: "0% 4%" } }}>
                            <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
                                <img src={Logo1} alt='logo' className='header_logo' />
                                <Box sx={{ display: "flex", flexDirection: "column", padding: "0px 12px" }}>
                                    <span className='header__text'>Jane's</span>
                                    <span className='header__subtext'>Boutique</span>
                                </Box>
                            </Link>

                        </Box>


                        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                            {navItemsDataTwo.map((item) => (
                                <ReusableButton key={item.id} className="header_menu-cart" sx={{ color: '#000', padding: "0px 25px" }} buttonName={item.label} href={item.route} startIcon={item.icon} />
                            ))}
                        </Box>

                        {/* <Box sx={{ display: "flex", alignItems: "center" }}>
                            <ul style={{ display: "flex", alignItems: "center", margin: "0" }} >
                                <li style={{ listStyle: "none", marginLeft: "8px" }}>
                                    <ShoppingCartIcon className="header_button-cart my-2" titleAccess='Cart' />
                                </li>
                                <li style={{ listStyle: "none", marginLeft: "8px" }}>
                                    <FavoriteIcon className="header_button-cart my-2" titleAccess='Favourite' />
                                </li>
                                <li style={{ listStyle: "none", marginLeft: "8px" }}>
                                    <LogoutIcon className="header_button-cart my-2" titleAccess='LogOut' />
                                </li>
                            </ul>
                        </Box> */}

                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;


