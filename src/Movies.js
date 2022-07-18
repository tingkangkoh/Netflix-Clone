import React from "react";
import SwiperContainer from "./SwiperContainer";
import Hero from "./Hero";
function Movies({
  setHeroSelect,
  topMovies,
  actionMovies,
  adventureMovies,
  comedyMovies,
  horrorMovies,
  thrillerMovies,
  setModalOn,
  heroSelect,
  setSearch,
}) {
  return (
    <React.Fragment>
      <Hero heroSelect={topMovies[0]} setSearch={setSearch} />
      <main>
        <SwiperContainer
          title="Top Movies"
          media={topMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Action"
          media={actionMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Adventure"
          media={adventureMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Comedy"
          media={comedyMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Horror"
          media={horrorMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Thriller"
          media={thrillerMovies}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
      </main>
    </React.Fragment>
  );
}

export default Movies;
