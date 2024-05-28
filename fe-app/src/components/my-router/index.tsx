import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneratorPage from "@/components/routes/GeneratorPage";
import PaymentsPage from "@/components/routes/PaymentsPage";
import Root from "@/components/root/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <GeneratorPage />,
      },
      {
        path: "/payments",
        element: <PaymentsPage />,
      },
    ],
  },
]);

export const MyRouter = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
