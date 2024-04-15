import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import ArticlePage from "./ArticlePage";
import AboutPage from "./AboutPage";
import RouterNav from "./RouterNav";
import InfoPage from "./infoPage";

const RouteLink = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterApp />} >
            <Route index element={<TopPage />} />
            <Route path="article" element={<ArticlePage />} />
            <Route path="/article/info" element={<InfoPage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    )
);

export default RouteLink;