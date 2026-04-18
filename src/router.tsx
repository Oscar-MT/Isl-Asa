import { createBrowserRouter } from "react-router";
import Root from "./routes/root";
import AboutSection from "./routes/home/about-Section/AboutSection";
import Home from "./routes/home";
import NotFound from "./routes/not-found";
import Sedes from "./routes/sedes/Sedes";
import EnVivo from "./routes/en-vivo";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/Isl-Asa/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutSection />,
      },
      {
        path: "/sedes",
        element: <Sedes/>
      },
      {
        path: "/event",
        element: <></>
      },
      {
        path: "/en-vivo",
        element: <EnVivo/>
      },
      {
        path: "/*",
        element: <NotFound />,
      }
    ],
  },
],
{
  basename: "/",
});

export default router;
