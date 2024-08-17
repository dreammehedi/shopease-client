import { Audio } from "react-loader-spinner";
function Loader() {
  return (
    <>
      <Audio
        height="100"
        width="100"
        radius="10"
        color="#2B6CB0"
        ariaLabel="three-dots-loading"
      />
    </>
  );
}

export default Loader;
