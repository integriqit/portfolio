import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";

const Index = lazy(() => import("../pages/Index"));
const MFSPage = lazy(() => import("../pages/MFSPage"));
const PSPPage = lazy(() => import("../pages/PSPPage"));
const DFSPage = lazy(() => import("../pages/DFSPage"));
const EKYCPage = lazy(() => import("../pages/EKYCPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Index /> },
      { path: "services/mfs", element: <MFSPage /> },
      { path: "services/psp", element: <PSPPage /> },
      { path: "services/dfs", element: <DFSPage /> },
      { path: "services/ekyc", element: <EKYCPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
