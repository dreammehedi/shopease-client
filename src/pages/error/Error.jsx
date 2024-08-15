import { Link } from "react-router-dom";
import Footer from "./../../shared/footer/Footer";
import Header from "./../../shared/header/Header";
function Error() {
  return (
    <>
      <Header />
      {/* error, 404 */}
      <div className="flex items-center justify-center h-fit bg-gray-100 py-8 lg:py-10 ">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-secondary">
            404
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-dark font-lato mt-4">
            Page Not Found!
          </h2>
          <p className="text-dark mt-2">
            {`Sorry, the page you're looking for doesn't exist.`}
          </p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 text-sm md:text-base bg-secondary text-white rounded-md shadow hover:bg-primary my-transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error;
