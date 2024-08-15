import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../auth/AuthProvider";

function GoogleSignIn() {
  const { signInWithGoogle } = useContext(AuthContext);
  // handle google sign in
  const handleGoogleSignIn = async () => {
    try {
      signInWithGoogle().then(() => {
        Swal.fire({
          title: "Sign In Successful!",
          text: "You have successfully signed in!",
          icon: "success",
          timer: 1000,
        });
      });
    } catch (error) {
      Swal.fire({
        title: "Sign In Failed!",
        text: error.message,
        icon: "error",
        timer: 1000,
      });
    }
  };
  return (
    <>
      <button
        type="button"
        className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 mt-4 my-transition"
        onClick={handleGoogleSignIn}
      >
        Sign in with Google
      </button>
    </>
  );
}

export default GoogleSignIn;
