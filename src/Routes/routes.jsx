import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home";
import Details from "../layouts/Details";
import ChefDetails from "../components/ChefDetails";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../registretion/Login";
import Register from "../registretion/Register";
import EmailLogin from "../registretion/EmailLogin";
import Google from "../registretion/Google";

const router = createBrowserRouter([
  {
    path: 'loginLayout',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '',
        element: <Login></Login>
      },
      {
        path: "emailLogin",
        element: <EmailLogin></EmailLogin>
      },
      {
        path: "google",
        element: <Google></Google>
      },
      {
        path: "register",
        element: <Register></Register>
      },
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