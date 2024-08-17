import PropTypes from "prop-types";
import ProductAside from "./ProductAside";
import ProductGrid from "./ProductGrid";
const ProductLayout = ({ products, brandNames, categoryNames }) => {
  return (
    <>
      <div className="py-4 md:py-6 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* product aside */}
        <div className="lg:col-span-1 max-w-[400px] mx-auto">
          <ProductAside brandNames={brandNames} categoryNames={categoryNames} />
        </div>

        {/* product grid */}
        <div className="lg:col-span-3">
          <ProductGrid products={products} />
        </div>
      </div>
    </>
  );
};

ProductLayout.propTypes = {
  products: PropTypes.array.isRequired,
  brandNames: PropTypes.array.isRequired,
  categoryNames: PropTypes.array.isRequired,
};
export default ProductLayout;
