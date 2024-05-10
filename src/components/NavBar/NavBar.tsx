import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../assets";
import {
  getThemeFromLocalStore,
  setThemeToLocalStore,
} from "../../utils/LocalStore";
import MenuSvg from "../../assets/navigation/hamburgerMenu";
const NavBar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStore() || "light");
  const [openNavigation, setOpenNavigation] = useState(false);
  const handleThemeLight = () => {
    setTheme("light");
    setThemeToLocalStore("light");
    document.body.classList.toggle("dark");
  };
  const handleThemeDark = () => {
    setTheme("dark");
    setThemeToLocalStore("dark");
    document.body.classList.toggle("dark");
  };
  const handleHamburgerClick = () => {
    setOpenNavigation((prev) => !prev);
  };

  return (
    <div
      className={`${
        openNavigation &&
        "absolute top-0 left-0 right-0 z-50 bg-white dark:bg-themecolor-black "
      } flex flex-col  md:flex-row py-5 justify-between border-b-2`}
    >
      <div className={`${openNavigation && "mb-[50px]"} pl-8 md:pl-0 md:mb-0 `}>
        <NavLink to="/" onClick={handleHamburgerClick}>
          <h2 className="text-xl font-medium text-themecolor-black dark:text-themecolor-sky">
            NITHESH KUMAR
          </h2>
        </NavLink>
      </div>
      <nav className={`${openNavigation ? "block" : "hidden"} md:flex`}>
        <div className="block md:flex ">
          <ul className="md:flex block md:space-x-8 text-base font-medium  text-themecolor-black dark:text-themecolor-white text-center md:text-left">
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-white">
              <NavLink
                to="/"
                onClick={openNavigation ? handleHamburgerClick : undefined}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-white">
              <NavLink
                to="/about"
                onClick={openNavigation ? handleHamburgerClick : undefined}
              >
                About
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-white">
              <NavLink
                to="/resume"
                onClick={openNavigation ? handleHamburgerClick : undefined}
              >
                Resume
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-white">
              <NavLink
                to="/portfolio"
                onClick={openNavigation ? handleHamburgerClick : undefined}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-white">
              <NavLink
                to="/contact"
                onClick={openNavigation ? handleHamburgerClick : undefined}
              >
                Contact
              </NavLink>
            </li>
            {theme === "dark" ? (
              <li
                className="mt-[2px] flex-shrink-0 py-4 md:py-0 md:block md:items-left flex justify-center items-center"
                onClick={handleThemeLight}
              >
                <img
                  src={images.sun}
                  alt="light"
                  width={20}
                  height={20}
                  className="hover:scale-125"
                />
              </li>
            ) : (
              <li
                className="mt-[2px] flex-shrink-0 py-4 md:py-0 md:block md:items-left flex justify-center items-center "
                onClick={handleThemeDark}
              >
                <img
                  src={images.moon}
                  alt="light"
                  width={20}
                  height={20}
                  className="hover:scale-125"
                />
              </li>
            )}
          </ul>
        </div>
      </nav>
      <div className="md:hidden absolute right-12 top-5">
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
