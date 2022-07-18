import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";

function CardButton({ title, handleClick, id }) {
  let icon;
  let className = "card-button ";
  if (title === "play") {
    icon = faPlay;
    className += "card-button-play";
  } else if (title === "add") {
    icon = faPlus;
    className += "card-button-add";
  } else if (title === "expand") {
    icon = faAngleDown;
    className += "card-button-expand";
  }
  return (
    <button onClick={() => handleClick(id)} className={className}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}

export default CardButton;
