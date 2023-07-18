import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import RegionSagaView from "./ViewReduxSaga/RegionSagaView";
import RegionViewApi from "./RegionView/RegionViewApi";
import Signin from "./User/Signin";
import Signup from "./User/Signup";
export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "/api", element: <RegionViewApi /> },
        { path: "/saga", element: <RegionSagaView /> },
        { path: "/login", element: <Signin /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
