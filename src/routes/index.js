import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LogIn from "../views/Login";
import Home from "../views/Home";
import ImagesDrop from "../views/ImagesDrop";
import PrivateRoute from "./privateRoute";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<ImagesDrop />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
