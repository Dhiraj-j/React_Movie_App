
import React, { useContext } from "react";
import "./filter.css";
import { pageContext } from "../Pages/HomeScreen";

function Filter() {
  const {setPage , searchMovie ,setSearchMovie} = useContext(pageContext);
  return (
    <div className="filterContainer">
          <input
            className="inputBox"
            type="text"
            placeholder="Search"
            value={searchMovie}
            onChange={(e) => {
              setSearchMovie(e.target.value);
              setPage(1); 
            }}
          />
        </div>
  );
}

export default Filter;
