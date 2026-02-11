import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../assets";
import {
  getThemeFromLocalStore,
  setThemeToLocalStore,
} from "../../utils/LocalStore";
import MenuSvg from "../../assets/navigation/hamburgerMenu";
import { navbarData } from "../../data/nav-bar";
import NavItem from "./NavItem/NavItem";
import ThemeModeButton from "./ThemeModeButton/ThemeModeButton";

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStore());
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleThemeLight = () => {
    setTheme("light");
    setThemeToLocalStore("light");
    document.body.classList.toggle("dark");
    handleMenuItemsClick();
  };
  const handleThemeDark = () => {
    setTheme("dark");
    setThemeToLocalStore("dark");
    document.body.classList.toggle("dark");
    handleMenuItemsClick();
  };
  const handleMenuItemsClick = () => {
    if (openNavigation) {
      setOpenNavigation((prev) => !prev);
    }
  };
  const handleHamburgerClick = () => {
    setOpenNavigation((prev) => !prev);
  };

  return (
    <div
      className={`${
        openNavigation &&
        "absolute top-0 left-0 right-0 z-50 bg-color-7 dark:bg-themecolor-darkgray "
      } flex flex-col  md:flex-row py-5 justify-between border-b-2 sticky md:relative top-0 z-50  bg-themecolor-white dark:bg-themecolor-black`}
    >
      <div
        className={`${
          openNavigation && "mb-[50px]"
        } flex sm:pl-8 pl-4 md:pl-0 md:mb-0 `}
      >
        <NavLink to="/">
          <h2 className="text-xl font-medium text-themecolor-black dark:text-themecolor-sky">
            {navbarData.name}
          </h2>
        </NavLink>
      </div>
      <nav className={`${openNavigation ? "block" : "hidden"} md:flex`}>
        <div className="block md:flex ">
          <ul className="md:flex block md:space-x-8 text-base font-medium  text-themecolor-black dark:text-themecolor-white text-center md:text-left">
            {navbarData.navigations.map((item) => (
              <NavItem
                key={item.id}
                data={item}
                handleMenuItemsClick={handleMenuItemsClick}
                openNavigation={openNavigation}
              />
            ))}
            <ThemeModeButton
              handleTheme={
                theme === "dark" ? handleThemeLight : handleThemeDark
              }
              image={theme === "dark" ? images.sun : images.moon}
            />
          </ul>
        </div>
      </nav>
      <div className="md:hidden absolute sm:right-12 right-6 top-5">
        <button onClick={handleHamburgerClick}>
          <MenuSvg
            openNavigation={openNavigation}
            color={theme === "dark" ? "white" : "black"}
          />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
