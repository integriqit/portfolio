import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import FullScreenLoader from "./components/ui/FullScreenLoader";
import { router } from "./routes/router";

export default function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
