import NavLink from "./NavLink";
import { useState } from "react";
function Nav() {
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }
  const [search, setSearch] = useState("");
  return (
    <nav>
      <ul>
        <NavLink link="Home" />
        <NavLink link="TV Shows" />
        <NavLink link="Movies" />
        <NavLink link="Search" />
        <input value={search} onChange={handleSearchChange} />
        {search}
        <NavLink link="Notification" />
        <NavLink link="User" />
      </ul>
    </nav>
  );
}

export default Nav;
