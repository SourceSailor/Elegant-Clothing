import { useState, useEffect } from "react";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

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

  // ADd Shopping Cart Item
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
  function onDeleteFromShoppingCar(productId) {
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
    <section className="px-20 lg:px-40 xl:px-52 py-14">
      {openCart ? (
        <Cart
          shoppingCart={shoppingCart}
          toggleShoppingCart={toggleShoppingCart}
          calculatedPrice={totalPrice}
          onAddQuantity={onAddQuantity}
          onDecrementQuantity={onDecrementQuantity}
          onDelete={onDeleteFromShoppingCar}
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
