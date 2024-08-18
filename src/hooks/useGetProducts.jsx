import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

function useGetProducts(activePage, searchProduct, sortedBy, filter) {
  const axiosPublic = useAxiosPublic();

  const { data, refetch: allProductsRefetch } = useQuery({
    queryKey: ["allProducts", activePage, searchProduct, sortedBy, filter],
    queryFn: async () => {
      const fetchProducts = await axiosPublic.post(`/products`, {
        activePage,
        searchProduct,
        sortedBy,
        filter,
      });
      const resData = await fetchProducts.data;
      return resData;
    },
  });
  return { data, allProductsRefetch };
}

export default useGetProducts;
