import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import Products from "../../components/home/Products";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      {/* products */}
      <Products></Products>
    </>
  );
}

export default Home;
