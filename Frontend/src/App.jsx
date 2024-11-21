import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navb from "./components/Navbar/Navb";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();

  // route to hide footer
  const hideFooterRoutes = ["/rent-receipt"];

  return (
    <>
      <ScrollToTop />
      <Navb />
      <div className="mt-16">
        <Outlet />
      </div>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
