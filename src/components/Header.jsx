import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";

      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };
  const navLink =
    "text-center text-lg font-primary font-semibold text-primary py-2  dark:text-primary hover:text-dark dark:hover:text-[#0080a3] transition-colors";
  return (
    <header className="border-b border-primary/30 dark:border-primary/30 sticky top-0 z-20 bg-normalbg dark:bg-black">
      <div className="flex items-center justify-between mx-auto max-w-[1152px] px-6 py-4">
        <Link to="/" className={navLink}>
          <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
          <span className="font-bold">Eazy Stickers</span>
        </Link>

        <nav className="flex items-center py-2 z-10">
          <button
            className="flex items-center justify-center mx-3 w-8 h-8 rounded-full border border-primary dark:border-primary transition duration-300 hover:bg-primary/10 dark:hover:bg-primary/20"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            <FontAwesomeIcon
              icon={theme === "dark" ? faSun : faMoon}
              className="w-4 h-4 dark:text-primary text-primary"
            />
          </button>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => {
                  return isActive ? `underline ${navLink}` : navLink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? `underline ${navLink}` : navLink;
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? `underline ${navLink}` : navLink;
                }}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return isActive ? `underline ${navLink}` : navLink;
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <Link to="/cart" className="text-primary py-2">
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="dark:text-primary"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
