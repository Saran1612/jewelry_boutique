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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CallIcon from '@mui/icons-material/Call';
import './header.css';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from '../../assests/logo/icons8-sparkling-diamond-100.png';
import Tooltip from '@mui/material/Tooltip';
import Logo1 from '../../assests/logo/icons8-jewel-64.png';
import InfoIcon from '@mui/icons-material/Info';
import Logout from '@mui/icons-material/Logout';
import { animated, useSpring } from '@react-spring/web'
import { useInView } from 'react-intersection-observer';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Cookies from 'js-cookie';
import Cart from '../cart/cart';

const drawerWidth = 240;

const navItems = [
    { id: 1, label: 'Home', route: "/user/", icon: <HomeIcon className='header_icon' /> },
    { id: 2, label: 'Shop', route: "/user/shop", icon: <ShoppingBagIcon className='header_icon' /> },
    { id: 3, label: 'About', route: "/user/about", icon: <InfoIcon className='header_icon' /> },
    { id: 4, label: 'Contact', route: "/user/contact", icon: <CallIcon className='header_icon' /> }
];

const navItemsDataOne = [
    { id: 1, label: 'Home', route: "/user/", icon: <HomeIcon className='header_icon' /> },
    { id: 2, label: 'Shop', route: "/user/shop", icon: <ShoppingBagIcon className='header_icon' /> },
];

const navItemsDataTwo = [
    { id: 1, label: 'About', route: "/user/about", icon: <InfoIcon className='header_icon' /> },
    { id: 2, label: 'Contact', route: "/user/contact", icon: <CallIcon className='header_icon' /> }
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
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [username, setUsername] = React.useState("");

    const [state, setState] = React.useState({
        right: false,
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogoutClick = () => {
        Cookies.remove("jwt_token");
        Cookies.remove("role");
        navigate("/");
        handleMenuClose();
    }

    React.useEffect(() => {
        const name = Cookies.get("username");
        setUsername(name);
    }, [])


    //Header-Tab
    const [refTab, inViewTab] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsOne = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-50px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        config: { duration: 400 }, // Adjust the duration as needed
        delay: 1000
    });

    //Header-Link
    const [refLink, inViewLink] = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
        threshold: 0.25, // Percentage of element visibility required to trigger the animation
    });


    const springPropsLink = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,-50px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0,0)' },
        config: { duration: 400 }, // Adjust the duration as needed
    });


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
                    <li style={{ listStyle: "none", padding: "16px 20px", display: "flex", justifyContent: "start" }}>
                        {/* <ReusableButton key={item.id} className="header_menu-cart-mobile" sx={{ color: '#fff', padding: "0px 25px" }} buttonName={item.label} href={item.route} startIcon={item.icon} /> */}
                        <NavLink to={item.route} className="header_menu-cart" style={({ isActive }) => ({
                            color: isActive ? '#74959A' : '#624F82'
                        })}>
                            {item.icon}
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    function stringToColor(string) {
        return '#9F73AB';
    }

    function stringAvatar(name) {
        const nameParts = name.split(' ');
        const initials =
            nameParts.length > 1
                ? `${nameParts[0][0]}${nameParts[1][0]}`
                : nameParts[0][0];

        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: initials,
        };
    }


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };


    return (
        <>
            <Box sx={{ display: 'flex', height: "0px" }}>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar component="nav" sx={{ background: "#fff", boxShadow: "none", display: "flex", flexDirection: "row" }}>
                        <Toolbar className='header_toolbar' sx={{ width: "95%" }}>
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
                                    <NavLink to={item.route} className="header_menu-cart" style={({ isActive }) => ({
                                        color: isActive ? '#74959A' : ''
                                    })}>
                                        <animated.div ref={refLink} style={springPropsLink}>
                                            {item.icon}
                                            {item.label}
                                        </animated.div>
                                    </NavLink>
                                ))}
                            </Box>

                            <Box sx={{ display: { xs: 'flex', sm: 'flex' }, justifyContent: "center", alignItems: "center", width: { xs: '100%', sm: 'auto' }, marginRight: { xs: "8%", sm: "0%" }, margin: { sm: "0% 2%", md: "0% 2%", lg: "0% 4%" } }} className="logo_header">
                                <Link to="/" style={{ display: "flex", textDecoration: "none" }}>
                                    <animated.div className='header-logo-wrapper' ref={refTab} style={springPropsOne}>
                                        <img src={Logo1} alt='logo' className='header_logo' />
                                        <Box sx={{ display: "flex", flexDirection: "column", padding: "0px 12px" }}>
                                            <span className='header__text'>Jane's</span>
                                            <span className='header__subtext'>Boutique</span>
                                        </Box>
                                    </animated.div>
                                </Link>
                            </Box>

                            <Box sx={{ display: { xs: 'none', sm: 'flex' } }} className="navlinks">
                                {navItemsDataTwo.map((item) => (
                                    // <ReusableButton key={item.id} className="header_menu-cart" sx={{ color: '#000', padding: "0px 25px" }} buttonName={item.label} href={item.route} startIcon={item.icon} />
                                    <NavLink to={item.route} className="header_menu-cart" style={({ isActive }) => ({
                                        color: isActive ? '#74959A' : '#624F82'
                                    })}>
                                        <animated.div ref={refLink} style={springPropsLink}>
                                            {item.icon}
                                            {item.label}
                                        </animated.div>
                                    </NavLink>

                                ))}
                            </Box>


                        </Toolbar>
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "end" }}>
                            {/* <Tooltip title={username} placement="bottom"> */}
                                <IconButton
                                    onClick={handleMenuClick}
                                    size="small"
                                    sx={{ fontSize: "1rem" }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar className='avatar_name' sx={{ width: 32, height: 32, fontSize: "1rem" }} {...stringAvatar(username)} />
                                </IconButton>
                            {/* </Tooltip> */}
                        </Box>
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

                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleMenuClose}
                    onClick={handleMenuClose}

                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <ListItemIcon>
                            <Person2OutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        Profile
                    </MenuItem>
                    <Divider sx={{ margin: "2px !important" }} />
                    <MenuItem onClick={toggleDrawer('right', true)}>
                        <ListItemIcon>
                            <ShoppingCartOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        MyCart
                    </MenuItem>
                    <Divider sx={{ margin: "2px !important" }} />
                    <MenuItem onClick={handleLogoutClick}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </Box>

            <Drawer
                anchor="right"
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                <Cart anchor="right" toggleDrawer={toggleDrawer} />
            </Drawer>

            <Box>
                <Outlet />
            </Box>
        </>
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


