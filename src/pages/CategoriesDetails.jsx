import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const CategoriesDetails = () => {
  const { id } = useParams();

  const getCategoryDetails = async () => {
    return await axios.get(
      `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`);
  };

  const {
    isLoading,
    isError,
    error,
    data: categoryDetails,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: getCategoryDetails,
  });

  if (isError)
    return (
      <div className=" flex items-center justify-center h-screen">
        <h1 className=" text-2xl">Error: {error.message}</h1>
      </div>
    );

  if (isLoading) return <Loader />;

  return (
    <>
      <h1 className=" text-4xl font-semibold mt-32 text-center">
        Categories Details :
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center  my-10">
        {categoryDetails.data?.map((product) => (
          <div key={product.id} className=" shadow-lg p-5 rounded-xl">
            <img
              className="rounded-xl w-72 h-72"
              src={product.images}
              alt={product.title}
            />
            <div className=" flex justify-between items-center mt-3">
              <h2 className="text-sm text-center font-semibold ">
                {product.title}
              </h2>
              <p className=" text-red-500">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoriesDetails;
