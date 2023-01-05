import { NavLink } from "react-router-dom";
export default function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Add technologie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Lists technologies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
