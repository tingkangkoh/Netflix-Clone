function HeroButton({ text, handleClick }) {
  console.log(handleClick);
  console.log(text);
  return <button onClick={handleClick}>{text}</button>;
}

export default HeroButton;
