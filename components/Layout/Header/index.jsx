import { useState, useEffect } from "react";
import NavData from "data/NavData";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Menu from "components/icons/Menu";
import { useRouter } from "next/router";
import DeskTopMenu from "./DeskTopMenu";
import AuthBtn from "./AuthBtn";
import Close from "components/icons/Close";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const navOpen = () => {
    setOpen(true);
  };

  const navClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="border-b">
      <nav className="navbar container max-w-[50rem] mx-auto px-4 flex filter bg-white h-[56px] items-center justify-between">
        <div className="hamburger-button md:hidden">
          {open ? (
            <Close iconClass="h-5 w-5 text-gray-500" setOpen={navClose} />
          ) : (
            <Menu iconClass="h-5 w-5 text-gray-500" setOpen={navOpen} />
          )}
        </div>
        <Logo />
        <ul
          className={`mobile-menu md:hidden z-50 overflow-hidden absolute top-[57px] p-4 left-0 right-0 bg-white transition-transform ease-[cubic-bezier(1, 0.5, 1, 0.25))] ${
            open
              ? "h-auto translate-y-0 visible border-b"
              : "h-0 translate-y-1 invisible"
          }`}
        >
          {open &&
            NavData.map((navdata, index) => {
              return <MobileMenu key={index} {...navdata} />;
            })}
        </ul>
        <ul className="desktop-menu hidden md:flex">
          {NavData.map((navdata, index) => {
            return <DeskTopMenu key={index} {...navdata} />;
          })}
        </ul>
        <AuthBtn />
      </nav>
    </header>
  );
}
