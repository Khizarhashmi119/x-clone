import { RouteObject } from "react-router-dom";

import Home from "@pages/Home.page";
import SignIn from "@pages/SignIn.page";
import SignUp from "@pages/SignUp.page";
import App from "./App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/sign-in",
            element: <SignIn />,
          },
          {
            path: "/sign-up",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

export default routes;
