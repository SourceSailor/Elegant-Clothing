import { useState, useEffect } from "react";

import Header from "./components/Header";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { CartContext } from "./store/shopping-cart";

import "./App.css";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // Total Calculated Price
  useEffect(() => {
    const calculatedPrice = shoppingCart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(calculatedPrice);
  }, [shoppingCart]);

  // Total Items
  useEffect(() => {
    const totalItems = shoppingCart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setTotalItems(totalItems);
  }, [shoppingCart]);

  // Add Shopping Cart Item
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
  }

  // Delete From Cart
  function onDeleteFromShoppingCart(productId) {
    setShoppingCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  }

  // Toggle Shopping Cart State
  function toggleShoppingCart() {
    setOpenCart((prevState) => !prevState);
  }

  // Add Quantity to Item
  function onAddQuantity(productId) {
    setShoppingCart((prevState) =>
      prevState.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  // Decrement Quantity to Item
  function onDecrementQuantity(productId) {
    setShoppingCart((prevState) =>
      prevState.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  }

  console.log("Shopping Cart: ", shoppingCart);

  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        totalItems,
        totalPrice,
        addToCart: onAddToShoppingCart,
        deleteFromCart: onDeleteFromShoppingCart,
        toggleShoppingCart: toggleShoppingCart,
        addQuantity: onAddQuantity,
        decrementQuantity: onDecrementQuantity,
      }}
    >
      <section className="px-20 lg:px-40 xl:px-52 py-14">
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
    </CartContext.Provider>
  );
}

export default App;
