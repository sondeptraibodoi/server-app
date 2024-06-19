import {
  createBrowserRouter,
} from "react-router-dom";
import {type RouteObject} from 'react-router';
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home"))
const ErrorPage = lazy(() => import("../pages/error"))
const routerList: RouteObject[] = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "*",
        element: <ErrorPage />
    }
];

const RenderRouter = createBrowserRouter(routerList);

export default RenderRouter;
