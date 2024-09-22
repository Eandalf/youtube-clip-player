import { type PropsWithChildren } from "react";

const NavLink = ({ children }: PropsWithChildren) => {
  return (<div className="m-8">
    {children}
  </div>);
};

export default NavLink;
