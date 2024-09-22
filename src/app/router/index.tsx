import { useEffect } from "react";
import {
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Dashboard from "@app/components/Dashboard";
import Index from "@app/pages/Index";
import Title from "./title";

const MainRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = Title[pathname as keyof typeof Title] ?? Title["/"];
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};

const Router = () => (<HashRouter>
  <MainRouter />
</HashRouter>);

export default Router;
