import { Routes, Route } from "react-router-dom";
import { Products } from "../pages/Products";
import { Profile } from "../pages/Profile";
import { Contact } from "../pages/Contact";
import { AboutThisPage } from "../pages/AboutThisPage";
import { Top } from "../pages/Top";

export const Content = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/aboutthispage" element={<AboutThisPage />} />
      <Route path="/" element={<Top />} />
    </Routes>
  );
};
