import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "./../../axios/useAxiosPublic";
import Loader from "./../../shared/loader/Loader";
import ProductLayout from "./ProductLayout";

function Products() {
  // active page
  const [activePage, setActivePage] = useState(1);

  // search products
  const [searchProduct, setSearchProduct] = useState("");

  // axios public
  const axiosPublic = useAxiosPublic();

  // all products get
  const { data: productsData = {}, isPending: productLoading } = useQuery({
    queryKey: ["allProducts", activePage, searchProduct],
    queryFn: async () => {
      const fetchProducts = await axiosPublic.get(
        `http://localhost:5000/api/products?currentPage=${activePage}&searchProduct=${searchProduct}`
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
    uniqueCategory = [],
  } = productsData;

  return (
    <>
      <section className="container py-4 md:py-6">
        {/* title */}
        <h1 className="text-2xl  md:text-3xl font-bold text-secondary text-center ">
          ShopEase Products
        </h1>

        {/* product loading */}
        {productLoading && (
          <div className="flex justify-center items-center w-full min-h-screen fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-100 z-[9999]">
            <Loader></Loader>
          </div>
        )}
        {/* product layout */}
        <ProductLayout
          products={products}
          brandNames={uniqueBrandNames}
          categoryNames={uniqueCategory}
          totalProductsCount={totalProductsCount}
          activePage={activePage}
          setActivePage={setActivePage}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
        ></ProductLayout>
      </section>
    </>
  );
}

export default Products;
