import PropTypes from "prop-types";
import { useState } from "react";

const ProductAside = ({ brandNames, categoryNames }) => {
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
        <label className="block mb-1 font-semibold font-lato text-base text-secondary">
          Category Name
        </label>
        <select
          className="w-full border rounded px-2 py-1 text-sm outline-none"
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
  brandNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoryNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ProductAside;
