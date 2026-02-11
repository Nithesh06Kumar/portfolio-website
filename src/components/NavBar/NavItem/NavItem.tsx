import { FC } from "react";
import { NavLink } from "react-router-dom";
import { TNavbarData } from "../../../data/nav-bar";
import { HashLink } from "react-router-hash-link";
interface NavItemProp {
  openNavigation: boolean;
  handleMenuItemsClick: () => void;
  data: TNavbarData;
}

const NavItem: FC<NavItemProp> = ({
  data,
  openNavigation,
  handleMenuItemsClick,
}) => {
  return (
    <li
      className={
        "hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent"
      }
    >
      {data.innerLink ? (
        <HashLink
          to={data.link}
          onClick={openNavigation ? handleMenuItemsClick : undefined}
        >
          {data.title}
        </HashLink>
      ) : (
        <NavLink
          to={data.link}
          onClick={openNavigation ? handleMenuItemsClick : undefined}
          className={({ isActive }) =>
            isActive ? "text-color-1 dark:text-themecolor-sky" : undefined
          }
        >
          {data.title}
        </NavLink>
      )}
    </li>
  );
};

export default NavItem;
