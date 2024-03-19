import React from 'react';
import Login from '../screens/login/login'
import Register from '../screens/register/register';
import ProtectedRoutes from '../ProtectedRoutes';
import Header from '../screens/header/header';
import Footer from '../screens/footer/footer';
import About from '../screens/about/about';
import Contact from '../screens/contact/contact';
import Home from '../screens/home/home';
import Shop from '../screens/shop/shop';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { Products } from '../screens/product/product';
import Profile from '../screens/profile/profile';
import ForgetPassword from '../screens/forgetPassword/forgetPassword';
import ResetPassword from '../screens/resetPassword/resetPassword';
import Wishlist from '../screens/wishlist/wishlist';

const Routers = () => {
    const ROLES = "User";

    const UserRoutes = () => (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="profile" element={<Profile />} />
                <Route path="products/:productId" element={<Products />} />
                <Route path="wishlist" element={<Wishlist />} />
            </Route>
        </Routes>
    );
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/forget-password" element={<ForgetPassword />} />
                    <Route exact path="/reset-password/:token" element={<ResetPassword />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route element={<ProtectedRoutes allowedRoles={ROLES} />}>
                        <Route
                            path="/user/*"
                            element={
                                <>
                                    <Header />
                                    <UserRoutes />
                                    <Footer />
                                </>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
