import { type PropsWithChildren } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

interface NavLinkProp extends PropsWithChildren {
  to: string;
}

const NavLink = ({ to, children }: NavLinkProp) => {
  return (
    <RouterNavLink to={to}>
      {({ isActive }) => (
        <div className={`px-8 py-4 hover:shadow-xl${isActive && " bg-blue-400"}`}>
          {children}
        </div>
      )}
    </RouterNavLink>
  );
};

export default NavLink;
