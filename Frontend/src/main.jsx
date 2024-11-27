import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import PayRent from "./pages/PayRent.jsx";
import PostProperty from "./pages/PostProperty.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Rentreceipt from "./pages/Rentreceipt.jsx";
import RentalAgreement from "./pages/RentalAgreement.jsx";
import ReferAndEarn from "./pages/ReferAndEarn.jsx";
import Ownerplan from "./pages/Ownerplan.jsx";
import Careers from "./pages/Careers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/pay-rent" element={<PayRent />} />
      <Route path="/post-property" element={<PostProperty />} />
      <Route path="/rent-receipt" element={<Rentreceipt />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="rental-agreement" element={<RentalAgreement />} />
      <Route path="/refer-and-earn" element={<ReferAndEarn />} />
      <Route path="/owner-plan" element={<Ownerplan />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
