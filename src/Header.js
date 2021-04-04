import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="Header__search">
        <input className="Header__searchInput" type="text" />
        <SearchIcon className="Header__searchIcon" />
      </div>
      <div className="Header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="Header__option">
            <span className="Header__Option__line1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="Header__Option__line2">
              Sign {user ? "Out" : "In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="Header__option">
            <span className="Header__Option__line1">Returns</span>
            <span className="Header__Option__line2">& Orders</span>
          </div>
        </Link>
        <div className="Header__option">
          <span className="Header__Option__line1">Your</span>
          <span className="Header__Option__line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="Header__optionBasket">
            <ShoppingBasketIcon />
            <span className="Header__optionLineTwo Header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
