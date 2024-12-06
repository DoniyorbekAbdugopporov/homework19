import React from "react";
import { BsCart3 } from "react-icons/bs";
import { CiHeart, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import NavLogo from "../../assets/svg/logo.svg";
import { LINKS } from "../../static";

const Header = () => {
  return (
    <header className="w-full h-[75px] flex items-center justify-center bg-white fixed z-10 shadow-md">
      <div className="container">
        <nav className="navbar flex items-center justify-between">
          <div className="navbar__logo">
            <img className="min-w-40" src={NavLogo} alt="logo" />
          </div>
          <div className="navbar__collection flex items-center justify-center gap-6">
            {LINKS?.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#56B280] text-lg font-semibold flex items-center gap-1"
                    : "text-[#272727] text-lg font-semibold flex items-center gap-1 hover:text-[#56B280]"
                }
              >
                <span>{link.name}</span>
                <span>{link.icon}</span>
              </NavLink>
            ))}
          </div>
          <div className="navbar__icons text-[#272727] text-lg font-semibold flex items-center justify-center gap-4">
            <CiUser className="hover:text-[#56B280]" />
            <CiHeart className="hover:text-[#56B280]" />
            <BsCart3 className="hover:text-[#56B280]" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
