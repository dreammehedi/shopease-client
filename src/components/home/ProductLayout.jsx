import PropTypes from "prop-types";
import ProductAside from "./ProductAside";
import ProductGrid from "./ProductGrid";
const ProductLayout = ({ products }) => {
  return (
    <>
      <div className="py-4 md:py-6 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* product aside */}
        <div className="lg:col-span-1 max-w-[400px] mx-auto">
          <ProductAside />
        </div>

        {/* product grid */}
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>

      {/* product pagination */}
      <div className="w-full py-4 md:py-6 flex justify-center items-center">
        <button className="text-sm text-white bg-secondary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center border-r border-white">
          Prev
        </button>
        <button className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white">
          1
        </button>
        <button className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white">
          2
        </button>
        <button className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white">
          3
        </button>
        <button className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white">
          4
        </button>
        <button className="text-sm text-white bg-secondary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center ">
          Next
        </button>
      </div>
    </>
  );
};

ProductLayout.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ProductLayout;
