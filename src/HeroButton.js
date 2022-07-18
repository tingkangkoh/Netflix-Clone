import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
function HeroButton({ text, handleClick }) {
  let classes = "hero-button ";
  let icon;
  if (text === "Play") {
    classes += "play-button";
    icon = faPlay;
  } else {
    classes += "add-list-button";
    icon = faCircleInfo;
  }

  return (
    <button className={classes} onClick={handleClick}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </button>
  );
}

export default HeroButton;
