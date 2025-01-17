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
import { loadCart, loadCategories } from "./services/loaders/loaders";
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
import { loadProducts } from "./services/loaders/loaders";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import Auth from "./pages/auth/Auth";
import { AuthTokenProvider } from "./context/AuthToken";
import { combinedLoader, loadFavorites } from "./services/loaders/loaders";
import { IsOpenProvider } from "./context/IsOpen";
import AllProduct from "./pages/AllProduct";
import Cart from "./pages/auth/Cart";
import { IsOpenSuccessProvider } from "./context/IsOpenSuccess";
import ProtectedRoute from "./utility/ProtectedRoute";
import Favorite from "./pages/auth/Favorite";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import { EditingProductProvider } from "./context/EditingProduct";
import AddProduct from "./pages/admin/AddProduct";
import RemoveProduct from "./pages/admin/RemoveProduct";
import About from "./pages/About";

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
        <Route
          path="allproduct"
          element={<AllProduct />}
          loader={loadProducts}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} loader={combinedLoader} />
          <Route path="cart" element={<Cart />} loader={loadCart} />
          <Route
            path="wishList"
            element={<Favorite />}
            loader={loadFavorites}
          />
          <Route path="adminPanel" element={<Admin />}>
            <Route index element={<Dashboard />} loader={combinedLoader} />
            <Route
              path="products"
              element={<Products />}
              loader={loadProducts}
            />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="removeProduct" element={<RemoveProduct />} />
          </Route>
        </Route>
        <Route
          path="product/:id"
          element={<ProductDetails />}
          loader={loadProducts}
        />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return (
    <AuthTokenProvider>
      <IsOpenSuccessProvider>
        <IsOpenProvider>
          <EditingProductProvider>
            <RouterProvider router={route}></RouterProvider>;
          </EditingProductProvider>
        </IsOpenProvider>
      </IsOpenSuccessProvider>
    </AuthTokenProvider>
  );
};

export default App;
