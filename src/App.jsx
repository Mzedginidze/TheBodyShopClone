import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Trending from "./pages/Trending/Trending";
import Face from "./pages/face/Face";
import Body from "./pages/Body/Body";
import "bootstrap/dist/css/bootstrap.css";
import { loadCategories } from "./services/loaders/loaders";
import Bestsellers from "./pages/Trending/Bestsellers";
import Maintrending from "./pages/Trending/Maintrending";
import Mainbody from "./pages/Body/Mainbody";
import New from "./pages/Trending/New";
import Toprated from "./pages/Trending/Toprated";
import SubscribeAndSave from "./pages/Trending/SubscribeAndSave";
import ShowerGels from "./pages/Body/ShowerGels";
import BodyMoisturisers from "./pages/Body/BodyMoisturisers";
import BodyButters from "./pages/Body/BodyButters";
import MainFace from "./pages/face/MainFace";
import ViewAllFace from "./pages/face/ViewAllFace";
import Moisturisers from "./pages/face/Moisturisers";
import ClensersAndToners from "./pages/face/CleansersAndToners";
import FaceMasks from "./pages/face/FaceMasks";
import SerumsAndEssences from "./pages/face/SerumsAndEssences";
import SkincareWithSPF from "./pages/face/SkincareWithSPF";
import Hair from "./pages/Hair/Hair";
import MainHair from "./pages/Hair/MainHair";

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
        <Route path="face" element={<MainFace />}>
          <Route index element={<Face />} loader={loadCategories} />
          <Route path="view-all-face" element={<ViewAllFace />} />
          <Route path="moisturisers" element={<Moisturisers />} />
          <Route path="cleansers-&-toners" element={<ClensersAndToners />} />
          <Route path="face-masks" element={<FaceMasks />} />
          <Route path="serums-&-essences" element={<SerumsAndEssences />} />
          <Route path="skincare-with-SPF" element={<SkincareWithSPF />} />
        </Route>

        <Route path="body" element={<Mainbody />}>
          <Route index element={<Body />} loader={loadCategories} />
          <Route path="shower-gels" element={<ShowerGels />} />
          <Route path="body-moisturisers" element={<BodyMoisturisers />} />
          <Route path="body-butters" element={<BodyButters />} />
        </Route>
        <Route path="hair" element={<MainHair />}>
          <Route index element={<Hair />} loader={loadCategories} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={route}></RouterProvider>;
};

export default App;
