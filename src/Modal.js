import ReactPlayer from "react-player";
import movieService from "./services/movies";
import Player from "./Player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
function Modal({ active, heroSelect, setModalOn }) {
  let classes = "modal ";
  let classContent = "modal-content ";

  const [video, setVideo] = useState("");
  const [videoFound, setVideoFound] = useState(false);
  async function getVideo() {
    let response;
    console.log(heroSelect, "heroSelect");
    if (heroSelect.media_type && heroSelect.media_type === "tv") {
      console.log("find tv video", heroSelect);
      response = await movieService.getVideoTv(heroSelect.id);
    } else {
      response = await movieService.getVideoMovie(heroSelect.id);
    }
    if (response.results.length) {
      setVideo(response.results[0].key);
      setVideoFound(true);
    }
  }

  useEffect(() => {
    getVideo();
  }, [heroSelect]);

  function image() {
    return (
      <img
        src={`https://image.tmdb.org/t/p/original${heroSelect.backdrop_path}`}
        alt="movie poster"
      />
    );
  }
  function videoPlayer() {
    return <Player link={video} />;
  }

  if (active) {
    classes += "modal-active";
    classContent += "modal-content-active";
    return (
      <div className={classes}>
        <div className={classContent}>
          <button className="modal-close" onClick={() => setModalOn(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="modal-top">
            {videoFound ? videoPlayer() : image()}
            <div className="modal-button-container">
              <button className="modal-play-button">
                <FontAwesomeIcon icon={faPlay} /> Play
              </button>
              <button className="card-button card-button-add">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          <div className="modal-bottom">
            <h1 className="modal-title">
              {heroSelect.name ? heroSelect.name : heroSelect.title}
            </h1>
            <p className="modal-overview">{heroSelect.overview}</p>
            <p className="modal-genres">
              Genres:{" "}
              {heroSelect.genreNames.map((genreName) => (
                <span className="genre-span">{genreName},</span>
              ))}
            </p>
            <p className="modal-release-date">
              Release date:{" "}
              {heroSelect.release_date
                ? heroSelect.release_date
                : heroSelect.first_air_date}
            </p>
            <p className="modal-score">Score: {heroSelect.vote_average}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
