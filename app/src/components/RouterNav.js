import { NavLink,Outlet } from "react-router-dom";
import './RouterNav.css';

const isCurrent = ({isActive, isPending}) => isActive ? {
    color: 'Red',
    fontWeight: 'bold'
} : {};

export default function RouterNav() {
    return (
        <>
            <ul>
                <li><NavLink style={isCurrent} to="/">Home</NavLink></li>
                <li><NavLink style={isCurrent} to="/article">Article</NavLink></li>
                <li><NavLink style={isCurrent} to="/about" replace>About</NavLink></li>
            </ul>
            <hr />
            <Outlet />
        </>
    );
}