import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const url = "https://api.escuelajs.co/api/v1/categories";

const Categories = () => {
  const getCategory = async () => {
    return await axios.get(url);
  };

  const {
    data: category,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  if (isError)
    return (
      <div className=" flex items-center justify-center h-screen">
        <h1 className=" text-2xl">Error: {error.message}</h1>
      </div>
    );

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className=" text-4xl font-semibold mt-32 text-center">
        Categories :
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center  my-10">
        {category.data?.map((category) => (
          <div key={category.id}>
            <Link to={`/categories/${category.id}`}>
              <div className=" shadow-lg p-5 rounded-xl">
                <img
                  src={category.image}
                  alt={category.name}
                  className="rounded-xl w-72 h-72"
                />
                <h2 className="text-lg text-center font-semibold mt-3">
                  {category.name}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
