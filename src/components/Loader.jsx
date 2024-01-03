import Spinner from "../assets/spinner.svg";

const Loader = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <img src={Spinner} alt="spinner" />
    </div>
  );
};

export default Loader;
