import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
const AppLayout = () => {
  return (
    // <Provider store={store}>
    <>
      <Toaster />
      <Outlet />
    </>
    // <Footer />
    // <ScrollToTopButton />
    // </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

export default AppRouter;
