import CardButton from "./CardButton";
function searchItem({ media, handleSlideClick, setHeroSelect, setModalOn }) {
  return (
    <div
      className="search-item swiper-slide"
      onClick={() => handleSlideClick(media.id)}
      data-index={media.id}
      // onMouseEnter={async () => {
      //   setHoverCard(true);
      //   let response = await movieService.getVideoMovie(media.id);
      //   console.log("video response", response.results[0].key);
      // }}
      // onMouseLeave={() => setHoverCard(false)}
      key={media.id}
      virtualIndex={media.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w780${media.backdrop_path}`}
        alt=""
        key={media.id}
        data-index={media.id}
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
    </div>
  );
}

export default searchItem;
