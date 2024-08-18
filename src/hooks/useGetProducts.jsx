import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts(activePage, searchProduct, sortedBy, filter) {
  const { data, refetch: allProductsRefetch } = useQuery({
    queryKey: ["allProducts", activePage, searchProduct, sortedBy, filter],
    queryFn: async () => {
      const fetchProducts = await axios.post(
        `http://localhost:5000/api/products`,
        {
          activePage,
          searchProduct,
          sortedBy,
          filter,
        }
      );
      const resData = await fetchProducts.data;
      return resData;
    },
  });
  return { data, allProductsRefetch };
}

export default useGetProducts;
