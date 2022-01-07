import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <ul class="sidebar_content">
      <li>
        <Link to="/">トップ</Link>
      </li>
      <li>
        <Link to="/profile">プロフィール</Link>
      </li>
      <li>
        <Link to="/products">創作物</Link>
      </li>
      <li>
        <Link to="/aboutthispage">このWebページについて</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
};
