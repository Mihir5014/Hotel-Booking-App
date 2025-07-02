import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import AppLayout from "./component/Layout/AppLayout";
import Hotels from "./Pages/Hotels";
import CityHotels from "./Pages/CityHotels";
import Confirmation from "./Pages/Confirmation";
import NotFound from "./Pages/NotFound";
import BookingSteppper from "./Pages/BookingSteppper";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: '/hotels',
          element: <Hotels/>
        },
        {
          path: '/search/:city',
          element: <CityHotels/>,
        },
        {
          path: '/booking/:hotelId',
          element: <BookingSteppper/>,
        },
        {
          path: 'confirmation',
          element: <Confirmation/>,
        },
      ],
    },
  ]);
  return (
  <RouterProvider router={router} />
  )
}
