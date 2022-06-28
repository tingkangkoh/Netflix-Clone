import Header from "./Header";
import HeroButton from "./HeroButton";
function Hero({ heroSelect }) {
  console.log("heroSelect", heroSelect);

  function play() {
    alert("play" + heroSelect.id);
  }
  function addList() {
    alert("addlist" + heroSelect.id);
  }
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${heroSelect.backdrop_path}")`,
      }}
    >
      <Header />
      <div className="hero-text">
        <h1 className="hero-title">
          {heroSelect.name ? heroSelect.name : heroSelect.title}
        </h1>
        <HeroButton text="Play" handleClick={play} />
        <HeroButton text="My List" handleClick={addList} />
        <p className="hero-overview">{heroSelect.overview}</p>
      </div>
    </section>
  );
}

export default Hero;
