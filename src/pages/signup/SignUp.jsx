import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

function SignUp() {
  // show password
  const [showPassword, setShowPassword] = useState(false);

  //   handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(fullName, email, password);
  };
  return (
    <>
      {/* sign up */}
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-6">
            Create An Account
          </h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col space-y-4"
          >
            <div>
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
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
            <div>
              <label
                className="block text-dark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="relative w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary my-transition"
                  placeholder="Create a password"
                  minLength={6}
                  required
                />
                <button
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="text-xl absolute top-1/2 -translate-y-1/2 right-2"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg shadow hover:bg-secondary my-transition"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-between mt-4">
              <hr className="w-full border-gray-300" />
              <span className="px-2 text-gray-400">or</span>
              <hr className="w-full border-gray-300" />
            </div>
            <button
              type="button"
              className="w-full bg-red-500 text-white py-2 rounded-lg shadow hover:bg-red-600 mt-4"
              onClick={() => console.log("Google Sign-Up")}
            >
              Sign up with Google
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-4">
            {` Already have an account?`}{" "}
            <Link
              to="/signin"
              className="text-primary hover:text-secondary my-transition underline font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
