import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

function useGetBrandCategoryName(names, route) {
  const axiosPublic = useAxiosPublic();

  // get all brand category name
  const { data: allNames = [] } = useQuery({
    queryKey: [names],
    queryFn: async () => {
      const fetchData = await axiosPublic.get(`${route}`);
      const resData = await fetchData.data.payload;
      return resData;
    },
  });

  return { allNames };
}

export default useGetBrandCategoryName;
