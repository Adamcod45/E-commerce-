import "./Navbar.css";
import { ShoppingCart } from "lucide-react";
import Logo from "../assets/Logo.png";

const Navbar = ({ cartArray }) => {
  return (
    <nav className="Navbar">
      <img src={Logo} alt="" className="Logo" />
      <div className="Login">
        <button>Login</button>
      </div>
      <div className="cartIcon">
        <ShoppingCart size={38} />
        <span>{cartArray.length}</span> 
      </div>
    </nav>
  );
};

export default Navbar;
