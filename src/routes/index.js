import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LogIn from "../views/Login";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;
