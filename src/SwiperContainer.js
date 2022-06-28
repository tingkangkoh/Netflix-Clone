import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useState } from "react";
import CardButton from "./CardButton";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import play from "./images/play-button.png";
import like from "./images/like.png";
import dislike from "./images/dislike.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function SwiperContainer({ title, media, setHeroSelect }) {
  const [hoverCard, setHoverCard] = useState(false);
  function handleSlideClick(event) {
    setHeroSelect(
      media.find((media) => {
        return media.id === Number(event.target.getAttribute("data-index"));
      })
    );
  }
  for (let i = 0; i < test.length; i++) {
    for (let j = i + 1; j < test.length; j++) {
      if (test[j] < test[i]) {
        console.log("i", i);
        console.log("j", j);
        let temp = test[i];
        test[i] = test[j];
        test[j] = temp;
      }
    }
  }
  let slides = media.map((media) => {
    return (
      <SwiperSlide
        onClick={handleSlideClick}
        data-index={media.id}
        onMouseEnter={() => setHoverCard(true)}
        onMouseLeave={() => setHoverCard(false)}
        key={media.id}
      >
        <img
          src={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
          alt=""
          key={media.id}
          data-index={media.id}
        />

        <div className="card-details">
          <div className="card-button-container">
            <CardButton iconSrc={play} />
            <CardButton iconSrc={like} />
            <CardButton iconSrc={dislike} />
          </div>
          <br></br>
          {media.genreNames.map((genreName) => (
            <span className="genre-span">{genreName}</span>
          ))}
        </div>
      </SwiperSlide>
    );
  });
  return (
    <div>
      <div className="swiper-title-container">
        <p className="swiper-title">{title}</p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        slidesPerGroup={5}
        speed={1000}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default SwiperContainer;
