import SearchIcon from "./images/search.svg";
import NotificationIcon from "./images/notification.png";
import UserIcon from "./images/user_icon.png";
function NavLink({ link }) {
  let linkOutput = link;
  if (link === "Search") {
    linkOutput = <img className="search-icon" src={SearchIcon} />;
  } else if (link === "Notification") {
    linkOutput = <img className="notification-icon" src={NotificationIcon} />;
  } else if (link === "User") {
    linkOutput = <img className="user-icon" src={UserIcon} />;
  }
  return (
    <li className={link === "Search" ? "search-link" : ""}>{linkOutput}</li>
  );
}

export default NavLink;
