import PropTypes from "prop-types";
function ProductCard({ product }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-[300px] md:h-[280px] lg:h-48 object-cover"
          src={product.productImage}
          alt={product.productName}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">
            {product.productName}
          </h3>
          <p className="text-dark mt-2">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-secondary font-bold">${product.price}</span>
            <span className="text-yellow-500 flex items-center">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span className="ml-1">{product.ratings}</span>
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Brand: <span className="text-dark">{product.brandName}</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Category: <span className="text-dark">{product.categoryName}</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Added on: {new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </>
  );
}
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
