import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Feedback from "../pages/Feedback";
import Products from "../pages/Products";
import Services from "../pages/Services";
import CoWorkers from "../pages/CoWorkers";
import ProductDetail from "../pages/ProductDetail";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home"></Navigate>} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="services" element={<Services />} />
        <Route path="coworkers" element={<CoWorkers />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="product" element={<ProductDetail />} />
      </Routes>
    </>
  );
}
