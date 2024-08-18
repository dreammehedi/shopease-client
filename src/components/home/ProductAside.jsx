import { useContext, useRef, useState } from "react";
import useGetBrandCategoryName from "../../hooks/useGetBrandCategoryName";
import { ProductContext } from "./Products";

const ProductAside = () => {
  const {
    setSearchProduct,
    allProductsRefetch,
    setActivePage,
    sortedBy,
    setSortedBy,
  } = useContext(ProductContext);

  // filter by brand name, category name, or price
  const [filter, setFilter] = useState({});
  console.log(filter);

  const brandRef = useRef();
  const categoryRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  // get all brand name
  const { allNames: allBrandNames } = useGetBrandCategoryName(
    "allBrandNames",
    "/all-brand"
  );

  // get all category name
  const { allNames: allCategoryNames } = useGetBrandCategoryName(
    "allCategoryNames",
    "/all-category"
  );

  return (
    <aside className="sticky top-0 p-4 bg-white shadow-md rounded-md">
      {/* search products */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-primary">
          Search Products
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const searchValue = form?.search?.value.trim();
            setSearchProduct(searchValue);
            setActivePage(1);
            allProductsRefetch();
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
            ref={brandRef}
            // onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {allBrandNames.map((brandName, ind) => {
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
            ref={categoryRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"

            // onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {allCategoryNames.map((categoryName, ind) => {
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
              ref={minPriceRef}
              min={0}
              placeholder="Min"
            />
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
              ref={maxPriceRef}
              min={5000}
              placeholder="Max"
            />
          </div>
        </div>
        <button
          onClick={() => {
            const brand = brandRef.current.value;
            const category = categoryRef.current.value;
            const minPrice = minPriceRef.current.value;
            const maxPrice = maxPriceRef.current.value;
            setFilter({ brand, category, minPrice, maxPrice });
          }}
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg shadow hover:bg-secondary my-transition"
        >
          Filter
        </button>
      </div>

      {/* sorting */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4 text-primary">Sorting</h2>
        <select
          value={sortedBy}
          onChange={(e) => {
            setSortedBy(e.target.value);
            allProductsRefetch();
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
        >
          <option value="">Select an option</option>
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
          <option value="dateAdded">Date Added: Newest First</option>
        </select>
      </div>
    </aside>
  );
};

export default ProductAside;
