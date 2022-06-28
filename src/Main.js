import SwiperContainer from "./SwiperContainer";
function Main({ trending, setHeroSelect, topMovies, topTv }) {
  return (
    <main>
      <SwiperContainer
        title="Trending"
        media={trending}
        setHeroSelect={setHeroSelect}
      />
      <SwiperContainer
        title="Top Movies"
        media={topMovies}
        setHeroSelect={setHeroSelect}
      />
      <SwiperContainer
        title="Top TV Shows"
        media={topTv}
        setHeroSelect={setHeroSelect}
      />
    </main>
  );
}

export default Main;
