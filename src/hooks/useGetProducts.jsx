import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetProducts(activePage) {
  const { data } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const fetchProducts = await axios.get(
        `http://localhost:5000/api/products?activePage=${activePage}`
      );
      const resData = await fetchProducts.data.payload;
      return resData;
    },
  });
  return { data };
}

export default useGetProducts;
