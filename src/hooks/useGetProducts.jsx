import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts(activePage, searchProduct) {
  const { data, refetch: allProductsRefetch } = useQuery({
    queryKey: ["allProducts", activePage, searchProduct],
    queryFn: async () => {
      const fetchProducts = await axios.get(
        `http://localhost:5000/api/products?activePage=${activePage}&searchProduct=${searchProduct}`
      );
      const resData = await fetchProducts.data;
      return resData;
    },
  });
  return { data, allProductsRefetch };
}

export default useGetProducts;
