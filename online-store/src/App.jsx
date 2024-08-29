import { useContext } from "react";

import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import CartContextProvider from "./store/shopping-cart";
import { CartContext } from "./store/shopping-cart";

import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <CartApp />
    </CartContextProvider>
  );
}

function CartApp() {
  const { openCart } = useContext(CartContext);
  console.log(openCart);
  return (
    <section className="px-20 md:px-40 xl:px-52 py-14">
      {openCart ? (
        <Cart />
      ) : (
        <>
          <Header />

          <section className="mt-20">
            <h2 className="text-3xl font-bold text-center md:text-left text-stone-400">
              Elegant Clothing For Everyone
            </h2>

            <Product />
          </section>
        </>
      )}
    </section>
  );
}

export default App;
