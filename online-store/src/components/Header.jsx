import { useContext } from "react";

import logo from "../../public/logo.png";
import { CartContext } from "../store/shopping-cart";

const Header = () => {
  const { totalItems, toggleShoppingCart } = useContext(CartContext);

  return (
    <header className="flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center">
        <img
          className="object-contain w-[120px] h-auto pr-5"
          src={logo}
          alt="logo"
        />

        <h1 className="text-4xl md:text-5xl text-center font-bold text-[#edbf68]">
          Elegant Context
        </h1>
      </div>

      <button
        onClick={toggleShoppingCart}
        className="px-5 sm:px-7 py-1 sm:py-4 rounded-md bg-[#edbf68] hover:bg-[#f5b744] font-sans text-lg font-medium ml-4 md:ml-2"
      >
        Cart ({totalItems})
      </button>
    </header>
  );
};

export default Header;
