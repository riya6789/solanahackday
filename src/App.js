import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Slide169Cause from "./pages/Slide169Cause";
import Slide169Start from "./pages/Slide169Start";
import Slide1692 from "./pages/Slide1692";
import Slide1694 from "./pages/Slide1694";
import Slide1698 from "./pages/Slide1698";
import FrameComponent from "./pages/FrameComponent";
import FrameComponent1 from "./pages/FrameComponent1";
import Slide1691 from "./pages/Slide1691";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-start":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-2":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-4":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-11":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Slide169Cause />} />

      <Route path="/slide-169-start" element={<Slide169Start />} />

      <Route path="/slide-169-2" element={<Slide1692 />} />

      <Route path="/slide-169-4" element={<Slide1694 />} />

      <Route path="/slide-169-1" element={<Slide1698 />} />

      <Route path="/frame-1" element={<FrameComponent />} />

      <Route path="/frame-6" element={<FrameComponent1 />} />

      <Route path="/slide-169-11" element={<Slide1691 />} />
    </Routes>
  );
}
export default App;
