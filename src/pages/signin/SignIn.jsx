import { Link } from "react-router-dom";

function Signin() {
  // handle sign in
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <>
      {/* sign in */}
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
            Sign In to ShopEase
          </h2>
          <form
            onSubmit={(e) => {
              handleSignIn(e);
            }}
            className="flex flex-col space-y-4"
          >
            <div className="">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="">
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg shadow hover:bg-secondary my-transition"
            >
              Sign In
            </button>
            <div className="flex items-center justify-between mt-4">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-400">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 mt-4 my-transition"
              onClick={() => console.log("Google Sign-In")}
            >
              Sign in with Google
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            {` Don't have an account?`}{" "}
            <Link
              to="/signup"
              className="text-primary hover:text-secondary my-transition underline font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
