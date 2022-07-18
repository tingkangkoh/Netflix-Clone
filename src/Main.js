import React from "react";
import SwiperContainer from "./SwiperContainer";
import Hero from "./Hero";
function Main({
  trending,
  setHeroSelect,
  topMovies,
  topTv,
  setModalOn,
  heroSelect,
  setSearch,
}) {
  return (
    <React.Fragment>
      <Hero heroSelect={trending[0]} setSearch={setSearch} />
      <main>
        <SwiperContainer
          title="Trending"
          media={trending}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Top Movies"
          media={topMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Top TV Shows"
          media={topTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
      </main>
    </React.Fragment>
  );
}

export default Main;
