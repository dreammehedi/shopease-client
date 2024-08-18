import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://shopeasy-server.vercel.app/api",
  baseURL: "http://localhost:5000/api",
});
function useAxiosPublic() {
  return axiosPublic;
}

export default useAxiosPublic;
