import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.styles.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [, setWindowWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isMobile = (width) => {
    if (width < 896) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    setShowMenu(isMobile(window.innerWidth));
    window.addEventListener("resize", (x) => {
      setWindowWidth(x.currentTarget.innerWidth);
      setShowMenu(isMobile(x.currentTarget.innerWidth));
    });
  }, []);

  const handleLogin = () => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/auth/google`;
    window.open(url, "_self");
  };
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const ExtendedNav = () => (
    <>
      <div className="flex items-center flex-shrink-0 mr-6 text-l">
        <Link to="/" className="border-b border-gray-400 mr-6 uppercase">
          Retail
        </Link>
        <Link to="/" className="border-b border-gray-400 mr-6 uppercase">
          SME
        </Link>
        <Link to="/" className="border-b border-gray-400 mr-6 uppercase">
          Corporate
        </Link>
        <Link to="/" className="border-b border-gray-400 mr-6 uppercase">
          About Us
        </Link>
        <Link to="/" className="border-b border-gray-400 mr-6 uppercase">
          COVID-19
        </Link>
        <Link to="/" className="uppercase border-b border-gray-400">
          Campaigns
        </Link>
      </div>
      <div className="flex items-center flex-shrink-0 text-gray-600 text-l">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mr-6" />
        <button
          className="bg-transparent hover:bg-gray-200 text-gray-600 font-semibold hover:text-gray-900 px-4 py-2 border border-gray-200 hover:border-gray-500 rounded-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
  const NavMenu = () => (
    <>
      <div className="flex flex-col space-y-2" onClick={handleNav}>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
      </div>
      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={handleNav}
        >
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">Retail</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">SME</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">Corporate</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">About Us</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">COVID-19</a>
          </li>
          <li className="border-b border-gray-400 my-8 uppercase">
            <a href="/">Campaigns</a>
          </li>
          <li
            className="border-b border-gray-400 my-8 uppercase"
            onClick={handleLogin}
          >
            Login
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap lg:px-20 px-6 py-6">
        <div className="flex items-center flex-shrink-0 mr-6 text-2xl font-bold uppercase">
          Neobank
        </div>
        {showMenu ? <NavMenu /> : <ExtendedNav />}
      </nav>
    </>
  );
};

export default Navbar;
