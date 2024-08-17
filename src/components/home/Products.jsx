import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "./../../axios/useAxiosPublic";
import ProductLayout from "./ProductLayout";

function Products() {
  // active page
  const [activePage, setActivePage] = useState(1);

  // axios public
  const axiosPublic = useAxiosPublic();
  // all products get
  const { data: productsData = {} } = useQuery({
    queryKey: ["allProducts", activePage],
    queryFn: async () => {
      const fetchProducts = await axiosPublic.get(
        `http://localhost:5000/api/products?currentPage= ${activePage}`
      );
      const resProducts = await fetchProducts.data;
      return resProducts;
    },
  });

  // all  products data
  const {
    payload: products = [],
    totalProductsCount = 0,
    uniqueBrandNames = [],
  } = productsData;

  // Determine the number of pages
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalProductsCount / itemsPerPage);

  // Create an array representing the pages
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // handle active page
  const handleActivePage = (page) => {
    setActivePage(page);
  };

  // handle prev button
  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  // handle next button
  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };
  return (
    <>
      <section className="container py-4 md:py-6">
        {/* title */}
        <h1 className="text-2xl  md:text-3xl font-bold text-secondary text-center ">
          ShopEase Products
        </h1>

        {/* product layout */}
        <ProductLayout
          products={products}
          brandNames={uniqueBrandNames}
        ></ProductLayout>

        {/* product pagination */}
        <ul className="w-full py-4 md:py-6 flex justify-center items-center">
          <button
            onClick={() => {
              handlePrev();
            }}
            className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center border-r border-white"
          >
            Prev
          </button>
          {paginationArray.map((page) => {
            return (
              <li
                key={page}
                onClick={() => {
                  handleActivePage(page);
                }}
                className={`text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white ${
                  page === activePage
                    ? "bg-secondary font-bold"
                    : "bg-primary hover:bg-secondary"
                }`}
              >
                {page}
              </li>
            );
          })}

          <button
            onClick={() => {
              handleNext();
            }}
            className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center "
          >
            Next
          </button>
        </ul>
      </section>
    </>
  );
}

export default Products;
