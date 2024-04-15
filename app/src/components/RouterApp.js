import { Link,Outlet } from "react-router-dom";

export default function RouterApp() {
    return (
        <>
            <ul>
                <li><Link to="/">Top</Link></li>
                <li><Link to="/article">Article</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/article/info">Info</Link></li>
            </ul>

            <hr />
            <Outlet />
        </>
    );
}