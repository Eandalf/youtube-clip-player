import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "@app/components/Dashboard";
import Index from "@app/pages/Index";

const Router = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Index />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default Router;
