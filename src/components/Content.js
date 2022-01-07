import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { Profile } from "./Profile";
import { Contact } from "./Contact";
import { Top } from "./Top";

export const Content = () => {
  return (
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<Top />} />
    </Routes>
  );
};
