import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

function useGetProducts(
  activePage = 0,
  searchProduct = "",
  sortedBy = "",
  filter = {}
) {
  const {
    data: productsData = {},
    isPending: productLoading,
    refetch: productRefetch,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const fetchProducts = await useAxiosPublic.get(
        `/products?pagination=${activePage}&searchProduct=${searchProduct}&sortedBy=${sortedBy}&filter=${filter}`
      );
      const resProducts = await fetchProducts.data;
      console.log(resProducts);
      return resProducts;
    },
  });
  return { productsData, productLoading, productRefetch };
}

export default useGetProducts;
