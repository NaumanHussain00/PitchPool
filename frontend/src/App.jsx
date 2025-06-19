import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import CreatePitcherProfile from "./pages/CreatePitcherProfile";
import CreateInvestorProfile from "./pages/CreateInvestorProfile";
const AppLayout = () => {
  return (
    <Provider store={store}>
      <>
        <Toaster />
        <Outlet />
      </>
      {/* <Footer /> */}
      {/* <ScrollToTopButton /> */}
    </Provider>
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
      {
        path: "/create-pitcher-profile",
        element: <CreatePitcherProfile />,
      },
      {
        path: "/create-investor-profile",
        element: <CreateInvestorProfile />,
      },
    ],
  },
]);

export default AppRouter;
