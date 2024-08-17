import { useState } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  function onAddToShoppingCart(productData) {
    setShoppingCart((oldData) => {
      const productIdx = oldData.findIndex(
        (item) => item.id === productData.id
      );

      if (productIdx !== -1) {
        const newCart = [...oldData];
        newCart[productIdx].quantity++;
        return newCart;
      } else {
        return [
          ...oldData,
          {
            id: productData.id,
            product: productData.product,
            quantity: productData.quantity,
            image: productData.image,
            price: productData.price,
          },
        ];
      }
    });
    setTotalItems((prevState) => prevState + 1);
  }

  function toggleShoppingCart() {
    setOpenCart((prevState) => !prevState);
  }

  console.log("Shopping Cart: ", shoppingCart);

  return (
    <section className="px-20 lg:px-40 xl:px-52 py-14">
      {openCart ? (
        <Cart
          shoppingCart={shoppingCart}
          toggleShoppingCart={toggleShoppingCart}
        />
      ) : (
        <>
          <Header
            totalItems={totalItems}
            toggleShoppingCart={toggleShoppingCart}
          />

          <Shop addToCart={onAddToShoppingCart} />
        </>
      )}
    </section>
  );
}

export default App;
