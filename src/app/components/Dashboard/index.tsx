import {
  useState,
  MouseEvent,
} from "react";
import { Outlet } from "react-router-dom";
import Route from "@app/router/route.enum";
import { ScrollArea } from "@app/components/ui/scroll-area";
import { Separator } from "@app/components/ui/separator";
import NavLink from "./NavLink";

const Dashboard = () => {
  const [openNavLinks, setOpenNavLinks] = useState(true);

  const onNavOpen = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenNavLinks((nav) => !nav);
  };

  return (
    <div className="container p-0 h-full flex flex-row flex-nowrap justify-start items-stretch">
      <ScrollArea className={`flex-initial shadow hover:shadow-lg transition-all${!openNavLinks && " w-10"}`}>
        <div className="h-10 flex flex-row flex-nowrap justify-end">
          <div
            className="flex-initial w-10 h-10 p-2 border-solid border-2 border-grey-400 rounded flex flex-col justify-between"
            onClick={onNavOpen}
          >
            <span className={`flex-initial w-6 h-1 border-r-2 bg-slate-800 transition-all${openNavLinks && " origin-center rotate-45 translate-y-[9px]"}`} />
            <span className={`flex-initial w-6 h-1 border-r-2 bg-slate-800 transition-all${openNavLinks && " origin-center hidden"}`} />
            <span className={`flex-initial w-6 h-1 border-r-2 bg-slate-800 transition-all${openNavLinks && " origin-center -rotate-45 -translate-y-[9px]"}`} />
          </div>
        </div>
        {openNavLinks && (<>
          <NavLink to="/">Home</NavLink>
          <Separator />
          <NavLink to={"/" + Route.ACCOUNT}>Guest</NavLink>
          <Separator />
          <NavLink to={"/" + Route.COLLECTION}>Collection</NavLink>
          <Separator />
          <NavLink to={"/" + Route.PLAYLIST}>Playlist</NavLink>
          <Separator />
          <NavLink to={"/" + Route.CLIP}>Clip</NavLink>
        </>)}
      </ScrollArea>
      <div className="flex-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
