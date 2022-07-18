import SearchIcon from "./images/search.svg";
import NotificationIcon from "./images/notification.png";
import UserIcon from "./images/user_icon.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function NavLink({ link, setSearchInput }) {
  const [hoverLink, setHoverLink] = useState(false);
  let route;
  let linkOutput = link;
  if (link === "Home") {
    route = "";
  } else if (link === "TV Shows") {
    route = "tvshows";
  } else {
    route = link;
  }

  let linkName = link;
  if (link === "Search") {
    linkOutput = <FontAwesomeIcon icon={faMagnifyingGlass} />;
  } else if (link === "Notification") {
    linkOutput = <FontAwesomeIcon icon={faBell} />;
  } else if (link === "User") {
    linkOutput = <img className="user-icon" src={UserIcon} />;
  }
  let classes;
  classes = "nav-link";
  classes += link === "Search" ? " search-link" : "";
  classes += hoverLink ? " nav-link-active" : "";

  if (link === "Search") {
    return (
      <li className={classes}>
        <button
          onClick={() =>
            document
              .querySelector(".nav-search")
              .classList.toggle("nav-search-active")
          }
          className="search-toggle"
        >
          {linkOutput}
        </button>
      </li>
    );
  } else {
    return (
      <li className={classes}>
        <Link
          to={`/${route}`}
          onClick={() => {
            console.log("clear search input");
            setSearchInput("");
          }}
          onMouseEnter={() => {
            setHoverLink(true);
          }}
        >
          {linkOutput}
        </Link>
      </li>
    );
  }
}

export default NavLink;
