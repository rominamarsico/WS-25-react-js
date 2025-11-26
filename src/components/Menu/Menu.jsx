import { NavLink, Outlet } from "react-router";

export function Menu() {
  return (
    <>
      <h2>Menu</h2>
      <NavLink to="/card">Show Cards</NavLink>
      <Outlet />
    </>
  );
}