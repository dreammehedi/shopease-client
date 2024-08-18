import { createContext, useState } from "react";
import useGetProducts from "../../hooks/useGetProducts";
import ProductLayout from "./ProductLayout";

// products context
export const ProductContext = createContext();
function Products() {
  // active page
  const [activePage, setActivePage] = useState(1);

  const totalProductsCount = 40;

  // all products data
  const { data: products } = useGetProducts(activePage);

  // all products related data
  const productsInfo = {
    activePage,
    setActivePage,
    products,
    totalProductsCount,
  };

  return (
    <>
      <ProductContext.Provider value={productsInfo}>
        <section className="container py-4 md:py-6">
          {/* title */}
          <h1 className="text-2xl  md:text-3xl font-bold text-secondary text-center ">
            ShopEase Products
          </h1>

          {/* product loading */}
          {/* {productLoading && (
            <div className="flex justify-center items-center w-full min-h-screen fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-100 z-[9999]">
              <Loader></Loader>
            </div>
          )} */}

          {/* product layout */}
          <ProductLayout></ProductLayout>
        </section>
      </ProductContext.Provider>
    </>
  );
}

export default Products;
