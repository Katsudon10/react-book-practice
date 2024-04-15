import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";

const RouteLink = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<RouterApp />} >
                <Route index element={<TopPage />} />
                <Route path="article" element={<ArticlePage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </>
    )
);

export default RouteLink;