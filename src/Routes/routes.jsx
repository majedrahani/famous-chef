import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Details from "../layouts/Details";
import ChefDetails from "../components/ChefDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
    {
      path: "details",
      element: <Details></Details>,
      children: [
        {
          path: ":id",
          element: <ChefDetails></ChefDetails>
        }
      ]
    }
  ]);

export default router