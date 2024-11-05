import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Face from "./pages/Face";
import Body from "./pages/Body";
import "bootstrap/dist/css/bootstrap.css";
import { loadCategories } from "./services/loaders/loaders";
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trending" element={<Trending />} loader={loadCategories} />
        <Route path="face" element={<Face />} loader={loadCategories} />
        <Route path="body" element={<Body />} loader={loadCategories} />
      </Route>
    )
  );
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
