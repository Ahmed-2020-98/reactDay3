import "./App.css";
import Header from "./Header/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/home";
import AboutUs from "./aboutUs/aboutUs";
import ContactUs from "./contactUs/contactUs";
import Products from "./products/products";
import ProductDetails from './products/productDetails';
function App() {
  return (
    <>
      

      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/products" exact component={Products} />
          <Route path="/details/:id" component={ProductDetails}/>
          {/* <Route path="*" component={notFound}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
