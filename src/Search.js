import { useSearchParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import movieService from "./services/movies";
import SearchItem from "./SearchItem";
function Search({
  search,
  searchResult,
  heroSelect,
  setSearch,
  setModalOn,
  setHeroSelect,
}) {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleSlideClick(id) {
    setHeroSelect(
      searchResult.find((media) => {
        return media.id === id;
      })
    );
    setModalOn(true);
  }

  console.log("search params", searchParams.entries());
  function searchOutput() {
    console.log("search", searchResult);
    let output;
    if (searchResult) {
      output = searchResult.map((item) => {
        console.log("item", item);
        return (
          <SearchItem
            media={item}
            setHeroSelect={setHeroSelect}
            setModalOn={setModalOn}
            handleSlideClick={handleSlideClick}
          />
        );
      });
    }

    return output;
  }
  return (
    <React.Fragment>
      <div className="search-container">
        <p className="search-test">searching for:{search}</p>
        <div className="search-div-container">{searchOutput()}</div>
      </div>
    </React.Fragment>
  );
}

export default Search;
