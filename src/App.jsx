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
import { loadCart, loadCategories } from "./services/loaders/loaders.jsx";
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
import Shampoo from "./pages/Hair/Shampoo";
import Conditioner from "./pages/Hair/Conditioner";
import HairStyling from "./pages/Hair/HairStyling";
import { loadProducts } from "./services/loaders/loaders.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import Auth from "./pages/auth/Auth";
import { AuthTokenProvider } from "./context/AuthToken";
import ProtectedRoute from "./components/ProtectedRoute";
import { combinedLoader } from "./services/loaders/loaders.jsx";
import { IsOpenProvider } from "./context/IsOpen";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/Cart";
import { IsOpenSuccessProvider } from "./context/IsOpenSuccess";

const App = () => {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="trending" element={<Maintrending />}>
          <Route index element={<Trending />} loader={loadCategories} />
          <Route
            path="bestsellers"
            element={<Bestsellers />}
            loader={loadProducts}
          />
          <Route path="new" element={<New />} loader={loadProducts} />
          <Route
            path="top-rated"
            element={<Toprated />}
            loader={loadProducts}
          />
          <Route
            path="subscribe-&-save"
            element={<SubscribeAndSave />}
            loader={loadProducts}
          />
        </Route>
        <Route path="face" element={<MainFace />}>
          <Route index element={<Face />} loader={loadCategories} />
          <Route
            path="view-all-face"
            element={<ViewAllFace />}
            loader={loadProducts}
          />
          <Route
            path="moisturisers"
            element={<Moisturisers />}
            loader={loadProducts}
          />
          <Route
            path="cleansers-&-toners"
            element={<ClensersAndToners />}
            loader={loadProducts}
          />
          <Route
            path="face-masks"
            element={<FaceMasks />}
            loader={loadProducts}
          />
          <Route
            path="serums-&-essences"
            element={<SerumsAndEssences />}
            loader={loadProducts}
          />
          <Route
            path="skincare-with-SPF"
            element={<SkincareWithSPF />}
            loader={loadProducts}
          />
        </Route>

        <Route path="body" element={<Mainbody />}>
          <Route index element={<Body />} loader={loadCategories} />
          <Route
            path="shower-gels"
            element={<ShowerGels />}
            loader={loadProducts}
          />
          <Route
            path="body-moisturisers"
            element={<BodyMoisturisers />}
            loader={loadProducts}
          />
          <Route
            path="body-butters"
            element={<BodyButters />}
            loader={loadProducts}
          />
        </Route>
        <Route path="hair" element={<MainHair />}>
          <Route index element={<Hair />} loader={loadCategories} />
          <Route path="shampoo" element={<Shampoo />} loader={loadProducts} />
          <Route
            path="conditioner"
            element={<Conditioner />}
            loader={loadProducts}
          />
          <Route
            path="hair-styling"
            element={<HairStyling />}
            loader={loadProducts}
          />
        </Route>
        <Route path="login" element={<Auth />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} loader={combinedLoader} />
          <Route path="cart" element={<Cart />} loader={loadCart} />
        </Route>

        {/* <Route path="cart" element={<Cart />} loader={loadCart} /> */}

        <Route
          path="allproduct"
          element={<AllProduct />}
          loader={loadProducts}
        />
      </Route>
    )
  );
  return (
    <AuthTokenProvider>
      <IsOpenSuccessProvider>
        <IsOpenProvider>
          <RouterProvider router={route}></RouterProvider>;
        </IsOpenProvider>
      </IsOpenSuccessProvider>
    </AuthTokenProvider>
  );
};

export default App;
