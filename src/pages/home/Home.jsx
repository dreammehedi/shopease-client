import { useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return <div>Home</div>;
}

export default Home;
