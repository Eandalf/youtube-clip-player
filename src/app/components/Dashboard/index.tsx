import { Outlet } from "react-router-dom";
import { ScrollArea } from "@app/components/ui/scroll-area";
import { Separator } from "@app/components/ui/separator";
import NavLink from "./NavLink";

const Dashboard = () => {
  return (
    <div className="container p-0 h-full flex flex-row flex-nowrap justify-start items-stretch">
      <ScrollArea className="flex-initial">
        <NavLink>Link 1</NavLink>
        <Separator className="my-4" />
        <NavLink>Link 2</NavLink>
        <Separator className="my-4" />
        <NavLink>Link 3</NavLink>
        <Separator className="my-4" />
        <NavLink>Link 4</NavLink>
        <Separator className="my-4" />
        <NavLink>Link 5</NavLink>
      </ScrollArea>
      <Separator orientation="vertical" className="flex-initial mr-4" />
      <div className="flex-auto p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
