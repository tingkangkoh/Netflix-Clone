import Header from "./Header";
import HeroButton from "./HeroButton";
function Hero({ heroSelect, setSearch }) {
  function play() {
    alert("play" + heroSelect.id);
  }
  function addList() {
    alert("addlist" + heroSelect.id);
  }
  if (heroSelect) {
    return (
      <section
        className="hero"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${
            heroSelect.backdrop_path ? heroSelect.backdrop_path : ""
          }")`,
        }}
      >
        <div className="hero-text-container">
          <div className="hero-text">
            <h1 className="hero-title">
              {heroSelect.name ? heroSelect.name : heroSelect.title}
            </h1>
            <div className="hero-button-container">
              <HeroButton text="Play" handleClick={play} />
              <HeroButton text="More Info" handleClick={addList} />
            </div>
            <p className="hero-overview">{heroSelect.overview}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
