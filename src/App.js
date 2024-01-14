import './App.css';
import About from './screens/about/about';
import Contact from './screens/contact/contact';
import Home from './screens/home/home';
import Shop from './screens/shop/shop';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Products } from './screens/product/product';
import Login from './screens/login/login'
import Register from './screens/register/register';
import ProtectedRoutes from './ProtectedRoutes';
import Header from './screens/header/header';
import Footer from './screens/footer/footer';
import Cart from './screens/cart/cart';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const ROLES = "User";

  const UserRoutes = () => (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="products/:productId" element={<Products />} />
        {/* <Route path="cart" element={<Cart />} /> */}

      </Route>
    </Routes>
  );


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes allowedRoles={ROLES} />}>
            {/* <Route path="/user/" element={<Header /> && <Footer />}>
              <Route path="/user/" element={<Home />} />
              <Route path="/user/shop" element={<Shop />} />
              <Route path="/user/contact" element={<Contact />} />
              <Route path="/user/about" element={<About />} />
              <Route path="/user/products" element={<Products />} />
            </Route> */}

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
      <ToastContainer transition={Flip} autoClose={2000} newestOnTop={true} theme="light" />
    </div>
  );
}

export default App;
