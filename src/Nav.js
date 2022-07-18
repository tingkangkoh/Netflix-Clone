import NavLink from "./NavLink";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams, useNavigate } from "react-router-dom";
function Nav({ setSearch }) {
  const navigate = useNavigate();
  function handleSearchChange(event) {
    setSearchInput(event.target.value);
    if (event.target.value) {
      navigate(`/search?query=${event.target.value}`);
      setSearch(event.target.value);
    } else {
      navigate("/");
    }
  }
  const [searchInput, setSearchInput] = useState("");
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <nav>
      <ul>
        <NavLink link="Home" setSearchInput={setSearchInput} />
        <NavLink link="Movies" setSearchInput={setSearchInput} />
        <NavLink link="TV Shows" setSearchInput={setSearchInput} />
        <input
          value={searchInput}
          onChange={handleSearchChange}
          className="nav-search"
        />
        <NavLink link="Search" />

        <NavLink link="Notification" />
        <NavLink link="User" />
        <FontAwesomeIcon icon={faBars} className="nav-icon" />
      </ul>
    </nav>
  );
}

export default Nav;
