import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "./Products";
function ProductGrid() {
  const { products } = useContext(ProductContext);
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

export default ProductGrid;
