import { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "@app/components/Dashboard";
import Index from "@app/pages/Index";
import Account from "@app/pages/Account";
import Collection from "@app/pages/Collection";
import Playlist from "@app/pages/Playlist";
import Clip from "@app/pages/Clip";
import Title from "./title";
import RoutePath from "./route.enum";

const MainRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = Title[pathname as keyof typeof Title] ?? Title["/"];
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Index />} />
        <Route path={RoutePath.ACCOUNT} element={<Account />} />
        <Route path={RoutePath.COLLECTION} element={<Collection />} />
        <Route path={RoutePath.PLAYLIST} element={<Playlist />} />
        <Route path={RoutePath.CLIP} element={<Clip />} />
      </Route>
    </Routes>
  );
};

const Router = () => (<HashRouter>
  <MainRouter />
</HashRouter>);

export default Router;
