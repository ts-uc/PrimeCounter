import { Link } from "react-router-dom";
import { BGM } from "../components/BGM";

export const SideBar = () => {
  return (
    <>
      <BGM />
      <ul class="sidebar_content">
        <li>
          <Link to="/">トップ</Link>
        </li>
        <li>
          <Link to="/profile">プロフィール</Link>
        </li>
        <li>
          <Link to="/products">技術作品集</Link>
        </li>
        <li>
          <Link to="/aboutthispage">このページについて</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </>
  );
};
