const Cart = ({
  shoppingCart,
  toggleShoppingCart,
  calculatedPrice,
  onAddQuantity,
  onDecrementQuantity,
  onDelete,
}) => {
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
              {shoppingCart.map(
                (cartProduct) =>
                  cartProduct.quantity > 0 && (
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
                        <div className="flex flex-col items-start">
                          <h4>{cartProduct.product}</h4>
                          <p className="flex flex-row font-bold gap-3 mt-5">
                            Price: ${cartProduct.price}
                          </p>
                          <p className="flex flex-row items-center font-bold gap-3 mt-5">
                            Quantity:
                            <button
                              className="hover:text-stone-400 text-2xl"
                              onClick={() =>
                                onDecrementQuantity(cartProduct.id)
                              }
                            >
                              -
                            </button>
                            {cartProduct.quantity}
                            <button
                              className="hover:text-stone-400 text-xl"
                              onClick={() => onAddQuantity(cartProduct.id)}
                            >
                              +
                            </button>
                          </p>
                          <button
                            className="mt-5 font-bold text-red-700 hover:text-red-500"
                            onClick={() => onDelete(cartProduct.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
            <div>
              {/* Subtotal */}

              <div className="border border-gray-200 " />
              <p className="text-2xl mt-5 text-white">
                Subtotal: ${calculatedPrice}
              </p>
            </div>
          </div>
        </>
      )}
      <button
        onClick={toggleShoppingCart}
        className="text-white font-bold mt-10 underline hover:text-stone-400"
      >
        Back to shopping
      </button>
    </div>
  );
};

export default Cart;
