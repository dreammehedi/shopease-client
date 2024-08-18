import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts(activePage) {
  const { data, refetch: allProductsRefetch } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const fetchProducts = await axios.get(
        `http://localhost:5000/api/products?activePage=${activePage}`
      );
      const resData = await fetchProducts.data;
      return resData;
    },
  });
  return { data, allProductsRefetch };
}

export default useGetProducts;
