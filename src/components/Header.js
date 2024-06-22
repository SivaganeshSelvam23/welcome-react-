import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems:", cartItems);
  return (
    <div className="flex justify-between items-center border-b-2 shadow-md ">
      <div>
        <img className="w-24 cursor-pointer" src={LOGO_URL} />
      </div>
      <span>Online Status: {onlineStatus ? "🟢" : "🔴"}</span>
      <div>
        <ul className="flex">
          <li className="p-5">
            <Link to="/" className="no-underline hover:text-orange-500">
              Home
            </Link>
          </li>
          <li className="p-5">
            <Link to="/about" className="no-underline hover:text-orange-500">
              About Us
            </Link>
          </li>
          <li className="p-5">
            <Link to="/contact" className="no-underline hover:text-orange-500">
              Contact Us
            </Link>
          </li>
          <li className="p-5">
            <Link to="/grocery" className="no-underline hover:text-orange-500">
              Grocery 📦
            </Link>
          </li>
          <li className="p-5">
            <Link
              to="/cart"
              className="no-underline  cursor-pointer hover:text-orange-500"
            >
              Cart ({cartItems.length})
            </Link>
          </li>

          <li className="p-5 cursor-pointer hover:text-orange-500">Login </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
