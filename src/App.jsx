import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Trending from "./pages/Trending/Trending";
import Face from "./pages/Face";
import Body from "./pages/Body/Body";
import "bootstrap/dist/css/bootstrap.css";
import { loadCategories } from "./services/loaders/loaders";
import Bestsellers from "./pages/Trending/Bestsellers";
import Maintrending from "./pages/Trending/Maintrending";
import Mainbody from "./pages/Body/Mainbody";
import New from "./pages/Trending/New";
import Toprated from "./pages/Trending/Toprated";
import SubscribeAndSave from "./pages/Trending/SubscribeAndSave";
const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trending" element={<Maintrending />}>
          <Route index element={<Trending />} loader={loadCategories} />
          <Route path="bestsellers" element={<Bestsellers />} />
          <Route path="new" element={<New />} />
          <Route path="top-rated" element={<Toprated />} />
          <Route path="subscribe-&-save" element={<SubscribeAndSave />} />
        </Route>
        <Route path="face" element={<Face />} loader={loadCategories} />
        <Route path="body" element={<Mainbody />} loader={loadCategories}>
          <Route index element={<Body />} loader={loadCategories} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
