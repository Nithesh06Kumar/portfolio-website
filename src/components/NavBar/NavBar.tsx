import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { images } from "../../assets";
import {
  getThemeFromLocalStore,
  setThemeToLocalStore,
} from "../../utils/LocalStore";
import MenuSvg from "../../assets/navigation/hamburgerMenu";
import { HashLink as Link } from "react-router-hash-link";

const NavBar: React.FC = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStore());
  const [openNavigation, setOpenNavigation] = useState(false);
  //   const { width } = useWindowDimensions();

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

  //   useEffect(() => {
  //     if (width > 770 && openNavigation) {
  //       console.log("Triggered,width>770");
  //       setOpenNavigation(false);
  //     }
  //   }, [width]);

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
            NITHESH KUMAR
          </h2>
        </NavLink>
      </div>
      <nav className={`${openNavigation ? "block" : "hidden"} md:flex`}>
        <div className="block md:flex ">
          <ul className="md:flex block md:space-x-8 text-base font-medium  text-themecolor-black dark:text-themecolor-white text-center md:text-left">
            <li
              className={
                "hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent"
              }
            >
              <NavLink
                to="/"
                onClick={openNavigation ? handleMenuItemsClick : undefined}
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent">
              <Link
                to="/#about"
                onClick={openNavigation ? handleMenuItemsClick : undefined}
              >
                About
              </Link>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent">
              <NavLink
                to="/resume"
                onClick={openNavigation ? handleMenuItemsClick : undefined}
              >
                Resume
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent">
              <NavLink
                to="/portfolio"
                onClick={openNavigation ? handleMenuItemsClick : undefined}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="hover:text-color-1 transition-colors dark:hover:text-themecolor-skydark md:dark:hover:text-themecolor-sky py-4 md:py-0 hover:bg-slate-200 md:hover:bg-transparent">
              <NavLink
                to="/contact"
                onClick={openNavigation ? handleMenuItemsClick : undefined}
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
