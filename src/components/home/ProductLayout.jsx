import PropTypes from "prop-types";
import ProductAside from "./ProductAside";
import ProductGrid from "./ProductGrid";
const ProductLayout = ({
  products,

  brandNames,
  categoryNames,
  totalProductsCount,
  activePage,
  setActivePage,
  searchProduct,
  setSearchProduct,
}) => {
  // Determine the number of pages
  const itemsPerPage = 6;
  const totalPages = Math.ceil(totalProductsCount / itemsPerPage);

  // Create an array representing the pages
  const paginationArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  // handle active page
  const handleActivePage = (page) => {
    setActivePage(page);
  };

  // handle prev button
  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  // handle next button
  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <>
      <div className="py-4 md:py-6 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6">
        {/* product aside */}
        <div className="lg:col-span-1 max-w-[400px] mx-auto">
          <ProductAside
            brandNames={brandNames}
            categoryNames={categoryNames}
            searchProduct={searchProduct}
            setSearchProduct={setSearchProduct}
          />
        </div>

        {products.length > 0 ? (
          <>
            {/* product grid */}
            <div className="lg:col-span-3">
              <ProductGrid products={products} />

              {/* product pagination */}
              <ul className="mt-6 w-full py-4 md:py-6 flex justify-center items-center">
                <button
                  onClick={() => {
                    handlePrev();
                  }}
                  className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center border-r border-white"
                >
                  Prev
                </button>
                {paginationArray.map((page) => {
                  return (
                    <li
                      key={page}
                      onClick={() => {
                        handleActivePage(page);
                      }}
                      className={`text-sm text-white bg-primary my-transition hover:bg-secondary p-4 size-5  flex justify-center items-center border-r border-white ${
                        page === activePage
                          ? "bg-secondary font-bold"
                          : "bg-primary hover:bg-secondary"
                      }`}
                    >
                      {page}
                    </li>
                  );
                })}

                <button
                  onClick={() => {
                    handleNext();
                  }}
                  className="text-sm text-white bg-primary my-transition hover:bg-secondary p-4 px-6 size-5  flex justify-center items-center "
                >
                  Next
                </button>
              </ul>
            </div>
          </>
        ) : (
          <div
            style={{
              background: `linear-gradient(265deg, rgb(43 108 176 / 24%), rgb(49 151 149 / 23%)), url(https://i.ibb.co/gJfFcCy/no-data.jpg)`,
            }}
            className="!bg-no-repeat !bg-center !bg-contain rounded-md overflow-hidden col-span-3 relative py-3 flex flex-col justify-center min-h-[350px]"
          >
            <h3 className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xl font-semibold text-center text-red-500">
              Products Not Found!
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

ProductLayout.propTypes = {
  products: PropTypes.array.isRequired,
  brandNames: PropTypes.array.isRequired,
  categoryNames: PropTypes.array.isRequired,
  totalProductsCount: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
  searchProduct: PropTypes.string.isRequired,
  setSearchProduct: PropTypes.func,
};
export default ProductLayout;
