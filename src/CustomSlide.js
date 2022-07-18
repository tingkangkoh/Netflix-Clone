import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import ReactPlayer from "react-player";
import CardButton from "./CardButton";
import play from "./images/play-button.png";
import like from "./images/like.png";
import dislike from "./images/dislike.png";

import movieService from "./services/movies";
function CustomSlide({ media, setHeroSelect }) {
  const [hover, setHover] = useState(false);

  function handleSlideClick(event) {
    setHeroSelect(
      media.find((media) => {
        return media.id === Number(event.target.getAttribute("data-index"));
      })
    );
  }
  return (
    <SwiperSlide
      onClick={handleSlideClick}
      data-index={media.id}
      onMouseEnter={async () => {
        setHover(true);
        let response = await movieService.getVideoMovie(media.id);
        console.log("video response", response.results[0].key);
      }}
      onMouseLeave={() => setHover(false)}
      key={media.id}
      virtualIndex={media.id}
    >
      {hover ? (
        <ReactPlayer url={`https://www.youtube.com/watch?v=hAsZCTL__lo`} />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
          alt=""
          key={media.id}
          data-index={media.id}
        />
      )}

      <div className="card-details">
        <div className="card-button-container">
          <CardButton title="play" />
          <CardButton title="add" />
          <CardButton title="expand" />
        </div>
        <br></br>
        {media.genreNames.map((genreName) => (
          <span className="genre-span">{genreName}</span>
        ))}
      </div>
    </SwiperSlide>
  );
}

export default CustomSlide;
