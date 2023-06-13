/* REACT BOOTSTRAP */
import { Container } from "react-bootstrap";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
// import UserListScreen from "./screens/UserListScreen";
// import UserEditScreen from "./screens/UserEditScreen";
// import ProductListScreen from "./screens/ProductListScreen";
// import ProductEditScreen from "./screens/ProductEditScreen";
// import OrderListScreen from "./screens/OrderListScreen";

/* REACT ROUTER */
import { BrowserRouter as Router, Route } from "react-router-dom";
import Star from "./components/star";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      {/* <Route exact path="/">
        <Redirect to="/page/1" />
      </Route> */}
     <div  style={{ position:"sticky",top: 0, zIndex: "100" }} ><Header /></div> 
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/page/:pageNumber" component={HomeScreen} />

          <Route path="/login" component={LoginScreen} />

          <Route path="/register" component={RegisterScreen} />

          <Route path="/profile" component={ProfileScreen} />

          <Route path="/shipping" component={ShippingScreen} />

          <Route path="/payment" component={PaymentScreen} />

          <Route path="/placeorder" component={PlaceOrderScreen} />

          <Route path="/orderDetail" component={OrderScreen} />

          <Route path="/product/:id" component={ProductScreen} />

          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/star" component={ Star } />


          {/* <Route path="/admin/userlist" component={UserListScreen} /> */}

          {/* <Route path="/admin/user/:id/edit" component={UserEditScreen} /> */}

          {/* <Route path="/admin/product/:id/edit" component={ProductEditScreen} /> */}

          {/* <Route path="/admin/productlist" component={ProductListScreen} /> */}

          {/* <Route path="/admin/orderlist" component={OrderListScreen} /> */}
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
