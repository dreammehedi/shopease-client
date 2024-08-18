import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts(activePage, searchProduct, sortedBy) {
  const { data, refetch: allProductsRefetch } = useQuery({
    queryKey: ["allProducts", activePage, searchProduct, sortedBy],
    queryFn: async () => {
      const fetchProducts = await axios.get(
        `http://localhost:5000/api/products?activePage=${activePage}&searchProduct=${searchProduct}&sortedBy=${sortedBy}`
      );
      const resData = await fetchProducts.data;
      return resData;
    },
  });
  return { data, allProductsRefetch };
}

export default useGetProducts;
