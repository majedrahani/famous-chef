import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Details from "../layouts/Details";
import ChefDetails from "../components/ChefDetails";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../registretion/Login";

const router = createBrowserRouter([
  {
    path: 'loginLayout',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '',
        element: <Login></Login>
      }
    ]
  },
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
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/data/${params.id}`)
      }
    ]
  }
]);

export default router;