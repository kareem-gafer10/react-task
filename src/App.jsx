import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoriesDetails from "./pages/CategoriesDetails";
import Contact from "./pages/Contact";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Layout/>,
    children:[
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories/> },
      { path: "categories/:id", element: <CategoriesDetails/> },
      { path: "contact", element: <Contact/> },
    ]
  
  }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
