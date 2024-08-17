import { DUMMY_PRODUCTS } from "../dummie-products";

const Product = ({ addToCart }) => {
  return (
    <section className="mt-6 grid lg:grid-cols-2 2xl:grid-cols-3 gap-10">
      {DUMMY_PRODUCTS.map((product) => (
        <article
          key={product.id}
          className="flex flex-col rounded-lg bg-[#5f4e33] text-white"
        >
          <img className="rounded-lg" src={product.image} alt={product.title} />
          <div className="flex flex-col items-start p-6 gap-5">
            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold text-[#fbd392]">
                {product.title}
              </h4>
              <p className="text-[#d1b68b] text-xl">${product.price}</p>
            </div>

            <p className="text-xl leading-6">{product.description}</p>

            <div className="flex w-full items-end justify-end">
              <button
                className="font-sans text-lg rounded-md py-1 px-2 text-black bg-[#f4b115] hover:bg-[#f5b744]"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    product: product.description,
                    quantity: 1,
                    image: product.image,
                    price: product.price,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Product;
