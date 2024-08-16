import PropTypes from "prop-types";
import { useState } from "react";
const ProductAside = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <aside className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4 text-primary">
        Categorization
      </h2>

      {/* brand filter */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold font-lato text-base text-secondary">
          Brand Name
        </label>
        <select
          className="w-full border rounded px-2 py-1 text-sm outline-none"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">All Brands</option>
          <option value="brand1">Brand 1</option>
          <option value="brand2">Brand 2</option>
        </select>
      </div>

      {/* category */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold font-lato text-base text-secondary">
          Category Name
        </label>
        <select
          className="w-full border rounded px-2 py-1 text-sm outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>

      {/* price range */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold font-lato text-base text-secondary">
          Price Range
        </label>
        <div className="flex space-x-2">
          <input
            type="number"
            className="w-1/2 border rounded px-2 py-1 text-sm outline-none font-lato"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
            placeholder="Min"
          />
          <input
            type="number"
            className="w-1/2 border rounded px-2 py-1 text-sm outline-none font-lato"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
            placeholder="Max"
          />
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded">
        Apply Filters
      </button>

      {/* sorting */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4 text-primary">Sorting</h2>
        <select className="w-full border rounded px-2 py-1 text-sm outline-none">
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
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
export default ProductAside;
