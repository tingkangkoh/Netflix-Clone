import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CardButton from "./CardButton";
import { useState } from "react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper React components
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

function SwiperContainer({ title, media, setHeroSelect, setModalOn }) {
  const [hoverCard, setHoverCard] = useState(false);

  function handleSlideClick(id) {
    setHeroSelect(
      media.find((media) => {
        return media.id === id;
      })
    );
    setModalOn(true);
  }

  let SwiperClass = "swiper-img ";

  hoverCard ? (SwiperClass += "slide-hover") : (SwiperClass += "");
  let slides = media.map((media) => {
    return (
      <SwiperSlide
        onClick={() => handleSlideClick(media.id)}
        data-index={media.id}
        key={media.id}
        virtualIndex={media.id}
      >
        <img
          src={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
          alt=""
          key={media.id}
          data-index={media.id}
          className={SwiperClass}
        />

        <div className="card-details">
          <div className="card-button-container">
            <CardButton title="play" />
            <CardButton title="add" />
            <CardButton
              title="expand"
              handleClick={handleSlideClick}
              id={media.id}
            />
          </div>
          <p>{media.title ? media.title : media.name}</p>
          {media.genreNames.map((genreName) => (
            <span className="genre-span">{genreName}</span>
          ))}
        </div>
        <div className="card-hover-cover"></div>

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
        slidesPerGroup={3}
        slidesPerView={3}
        pagination={{ clickable: false }}
        breakpoints={{
          1: {
            slidesPerGroup: 2,
            slidesPerView: 2,
          },
          800: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1200: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          1400: {
            slidesPerGroup: 5,
            slidesPerView: 5,
          },
          1600: {
            slidesPerGroup: 6,
            slidesPerView: 6,
          },
        }}
        speed={1000}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
        virtual
      >
        {slides}
      </Swiper>
    </div>
  );
}

export default SwiperContainer;
