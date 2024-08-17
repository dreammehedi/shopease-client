import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://shopeasy-server.vercel.app/api",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
