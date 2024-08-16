import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./../../axios/useAxiosPublic";
import ProductLayout from "./ProductLayout";

function Products() {
  // axios public
  const axiosPublic = useAxiosPublic();
  // all products get
  const { data: products = [] } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const fetchProducts = await axiosPublic.get(
        "http://localhost:5000/api/products"
      );
      const resProducts = await fetchProducts.data;
      return resProducts;
    },
  });

  return (
    <>
      <section className="container py-4 md:py-6">
        {/* title */}
        <h1 className="text-2xl  md:text-3xl font-bold text-secondary text-center ">
          ShopEase Products
        </h1>

        {/* product layout */}
        <ProductLayout products={products}></ProductLayout>
      </section>
    </>
  );
}

export default Products;
