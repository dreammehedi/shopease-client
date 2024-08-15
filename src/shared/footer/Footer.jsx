import Menu from "./../../components/Menu";
function Footer() {
  return (
    <>
      {/* footer */}
      <footer className="bg-[#F7FAFC] text-dark py-10">
        <div className="container grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {/* about */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-xl font-bold text-primary mb-4 font-lato">
              About ShopEase
            </h2>
            <p>
              {`ShopEase is your ultimate destination for online shopping,
              offering a vast selection of products across various categories.
              Whether you're looking for the latest in fashion, electronics,
              home decor, or health and beauty, we have something for everyone.`}
            </p>
            <br />
            <p>
              Join thousands of satisfied customers who trust ShopEase for all
              their shopping needs. Discover the joy of online shopping with us
              today!
            </p>
          </div>

          {/* quick links */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4 font-lato">
              Quick Links
            </h2>
            <ul className="flex flex-col space-y-2">
              <Menu></Menu>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h2 className="text-xl font-bold text-primary mb-4 font-lato">
              Contact Us
            </h2>
            <div className="space-y-2">
              <p className="text-dark">
                Mirzapur, Tangail,
                <br />
                Dhaka, Bangladesh
              </p>
              <p className="text-dark">Email: dreammehedihassan@gmail.com</p>
              <p className="text-dark">Phone: +880 1830143234</p>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="container text-center font-lato font-semibold text-dark mt-10">
          <p>
            &copy; 2024 ShopEase. All rights reserved. Developed by{" "}
            <a
              className="underline text-primary my-transition hover:text-secondary font-medium"
              href="https://www.facebook.com/dreammehedihassan/"
              target="_blank"
            >
              Md. Mehedi Hassan.
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
