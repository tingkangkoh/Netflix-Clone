function CardButton({ iconSrc, handleClick }) {
  return (
    <button onClick={handleClick} className="card-button">
      <img src={iconSrc} className="card-button-icon" alt="card-icon" />
    </button>
  );
}

export default CardButton;
