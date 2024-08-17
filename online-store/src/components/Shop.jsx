import Product from "./Product";

const Shop = ({ addToCart }) => {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center md:text-left text-stone-400">
        Elegant Clothing For Everyone
      </h2>

      <Product addToCart={addToCart} />
    </section>
  );
};

export default Shop;
