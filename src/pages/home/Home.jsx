import { Helmet } from "react-helmet-async";
import Products from "../../components/home/Products";

function Home() {
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
