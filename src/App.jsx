import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Book from "./pages/book";
import Services from "./pages/services";
import Pricing from "./pages/pricing";
import Blogs from "./pages/blog";
import Blog from "./pages/blog/Single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
  {
    path: "/pre-book",
    element: <Book />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/:slug",
    element: <Blog />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Outlet />
    </div>
  );
}

export default App;
