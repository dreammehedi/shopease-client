import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
function ProductGrid({ products }) {
  return (
    <>
      {/* product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, ind) => (
          <ProductCard key={ind} product={product} />
        ))}
      </div>
    </>
  );
}

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};
export default ProductGrid;
