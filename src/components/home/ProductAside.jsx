import PropTypes from "prop-types";
import { useState } from "react";

const ProductAside = ({ brandNames, categoryNames, setSearchProduct }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // handle search products
  const handleSearchProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchValue = form?.search?.value.trim();
    setSearchProduct(searchValue);
  };
  return (
    <aside className="sticky top-0 p-4 bg-white shadow-md rounded-md">
      {/* search products */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Search Products
        </h2>

        <form
          onSubmit={(e) => {
            handleSearchProduct(e);
          }}
        >
          <label
            className="block text-dark text-sm font-bold mb-2"
            htmlFor="search"
          >
            Product Name
          </label>
          <input
            type="text"
            id="search"
            name="search"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
            placeholder="Search Product Name"
          />
        </form>
      </div>

      {/* categorization */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Categorization
        </h2>

        {/* brand filter */}
        <div className="mb-4">
          <label className="block text-dark text-sm font-bold mb-2">
            Brand Name
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {brandNames.map((brandName, ind) => {
              let modifiedStringBrandName = brandName
                .replace(/([a-z])([A-Z])/, "$1 $2")
                .trim();

              return (
                <option key={ind} value={brandName} className="capitalize">
                  {modifiedStringBrandName}
                </option>
              );
            })}
          </select>
        </div>

        {/* category */}
        <div className="mb-4">
          <label className="block text-dark text-sm font-bold mb-2">
            Category Name
          </label>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Brands</option>
            {categoryNames.map((categoryName, ind) => {
              let modifiedStringCategoryName = categoryName
                .replace(/([a-z])([A-Z])/, "$1 $2")
                .trim();

              return (
                <option key={ind} value={categoryName} className="capitalize">
                  {modifiedStringCategoryName}
                </option>
              );
            })}
          </select>
        </div>

        {/* price range */}
        <div className="mb-4">
          <label className="block text-dark text-sm font-bold mb-2">
            Price Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              placeholder="Min"
            />
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              placeholder="Max"
            />
          </div>
        </div>

        <button className="w-full bg-primary text-white py-2 rounded-lg shadow hover:bg-secondary my-transition">
          Apply Filters
        </button>
      </div>

      {/* sorting */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Sorting</h2>
        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition">
          <option value="">Select an option</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateAdded">Date Added: Newest First</option>
        </select>
      </div>
    </aside>
  );
};

ProductAside.propTypes = {
  brandNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchProduct: PropTypes.string.isRequired,
  setSearchProduct: PropTypes.func.isRequired,
};
export default ProductAside;
