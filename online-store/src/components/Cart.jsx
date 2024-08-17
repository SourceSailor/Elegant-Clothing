const Cart = ({ shoppingCart, toggleShoppingCart }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-5 mt-10 text-white">
        Shopping Cart
      </h1>

      {shoppingCart.length === 0 ? (
        <h2 className="text-4xl text-white mt-20">No Items in your cart</h2>
      ) : (
        <>
          <div className="flex flex-col">
            {/* Product Map */}

            <ul className="text-white">
              {shoppingCart.map((cartProduct) => (
                <li key={cartProduct.id}>
                  {/* Top Border */}
                  <div className="border border-gray-200 " />

                  {/* Product */}
                  <div className="flex flex-row items-center gap-5 my-10">
                    {/* Product Image */}
                    <img
                      className="w-[200px]"
                      src={cartProduct.image}
                      alt={cartProduct.product}
                    />

                    {/* Product Info and Quantity */}
                    <div className="flex flex-col">
                      <h4>{cartProduct.product}</h4>
                      <p className="flex flex-row font-bold gap-3 mt-5">
                        Price: ${cartProduct.price}
                      </p>
                      <p className="flex flex-row font-bold gap-3 mt-5">
                        Quantity: <button>-</button> {cartProduct.quantity}
                        <button>+</button>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              {/* Subtotal */}

              <div className="border border-gray-200 " />
              <p className="text-2xl mt-5 text-white">Subtotal:</p>
            </div>
          </div>
        </>
      )}
      <button
        onClick={toggleShoppingCart}
        className="text-white font-bold mt-10"
      >
        Back to shopping
      </button>
    </div>
  );
};

export default Cart;
