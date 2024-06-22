import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems:", cartItems);
  if (cartItems.length === 0) {
    return (
      <div className="max-w-[880px] min-w-[880px] mx-auto text-center h-screen flex flex-col justify-center ">
        <div className="">
          <div className="flex justify-center">
            <img
              className="w-[271px] h-[256px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-500 mt-5 ">
            Your cart is empty
          </h1>
          <p className="font-normal text-gray-500">
            You can go to home page to view more restaurants
          </p>
          <div className="m-10 cursor-pointer">
            <span className="p-5 bg-orange-600 text-white font-medium  rounded-lg">
              SEE RESTAUREANTS NEAR YOU
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#e9ecee] h-screen">
      <div className="max-w-[880px] min-w-[880px] mx-auto flex justify-center py-10">
        <div className="bg-white w-[500px] py-5 px-10">
          <div className="font-bold">Hotel Name</div>
          <div className="flex justify-between my-10">
            <h1>Idly (1pc)</h1>
            <div className="flex w-[80px] justify-between cursor-pointer">
              <div>-</div>
              <div>1</div>
              <div>+</div>
            </div>
            <div>Rs.23</div>
          </div>
          <div className="  border-b-2 border-gray-500 ">
            <h1 className="text-black font-bold">Bill Details</h1>
            <div className="flex justify-between my-5 text-gray-500">
              <p>Item Total</p>
              <p>Rs.23</p>
            </div>
          </div>
          <div className="flex justify-between my-5">
            <p className="font-bold">TO PAY</p>
            <p>Rs.23</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
