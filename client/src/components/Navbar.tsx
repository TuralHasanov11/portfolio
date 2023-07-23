import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { styles } from "../assets/styles";
import { navLinks } from "../data";
import { menu, close, logo } from "../assets";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  function onNavbarLinkClick(section: string): void {
    setActiveSection(section);
    if (!section) {
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <nav
      id="navbar"
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            onNavbarLinkClick("");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Tural Hasanov
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks?.map((link) => (
            <li
              key={link.id}
              className={`${
                activeSection === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                onNavbarLinkClick(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuToggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]"
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
          />
          <div
            className={`${
              !menuToggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks?.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeSection === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    onNavbarLinkClick(link.title);
                    setMenuToggle(!menuToggle)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
