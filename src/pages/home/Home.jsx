import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../auth/AuthProvider";
import Products from "../../components/home/Products";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      {/* dynamic title */}
      <Helmet>
        <title>EasyShop| Home</title>
      </Helmet>
      {/* products */}
      <Products></Products>
    </>
  );
}

export default Home;
