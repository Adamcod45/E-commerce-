import "./Navbar.css";
import { ShoppingCart } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";


const Navbar = ({ cartArray }) => {
  return (
    <nav className="Navbar">
      <Link to={'/'}>
      <img src={Logo} alt="" className="Logo" />
      </Link>
      <div className="Login">
        <button>Login</button>
      </div>
      <div className="cartIcon">
        <Link to={'/cart'}>
          <ShoppingCart /> 
        </Link>
        <span>{cartArray.length}</span> 
      </div>
    </nav>
  );
};

export default Navbar;
