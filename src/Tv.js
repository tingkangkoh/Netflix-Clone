import SwiperContainer from "./SwiperContainer";
import Hero from "./Hero";
import React from "react";
function Tv({
  setHeroSelect,
  topTv,
  actionTv,
  animationTv,
  comedyTv,
  dramaTv,
  sciTv,
  setModalOn,
  heroSelect,
  setSearch,
}) {
  return (
    <React.Fragment>
      <Hero heroSelect={topTv[0]} setSearch={setSearch} />
      <main>
        <SwiperContainer
          title="Top TV"
          media={topTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Action"
          media={actionTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Animation"
          media={animationTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Comedy"
          media={comedyTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Drama"
          media={dramaTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
        <SwiperContainer
          title="Sci-Fi"
          media={sciTv}
          setHeroSelect={setHeroSelect}
          setModalOn={setModalOn}
        />
      </main>
    </React.Fragment>
  );
}

export default Tv;
