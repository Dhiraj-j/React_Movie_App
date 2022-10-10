import React, { createContext, useEffect, useState } from "react";
import MovieCart from "../components/MovieCart";
import "./homeScreen.css";
import axios from "axios";
import "./../components/filter.css";
import loading from "../assets/loading.svg";
import PaginationComp from "../components/Pagination";
import Filter from "../components/Filter.jsx";

const pageContext = createContext();

function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // const fetchUrl = "https://movie-task.vercel.app/api/popular?page=1";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let url = "";
      if (searchMovie) {
        url = `https://movie-task.vercel.app/api/search?page=${page}&query=${searchMovie}`;
      } else {
        url = `https://movie-task.vercel.app/api/popular?page=${page}`;
      }
      const request = await axios.get(url);
      console.log(request.data.data.results);
      setMovies(request.data.data.results);
      setTimeout(()=>{
      setIsLoading(false);
      }, 1000);
    }
    fetchData();
  }, [searchMovie, page]);

  // Movie Map to Component

  

  const moviescomp = movies.map((data) => {
    return (
      <MovieCart
        key={data.id}
        title={data.title}
        poster_path={data.poster_path}
        release_date={data.release_date}
        movie_id={data.id}
        desc={data.overview}
      />
    );
  });

  // Search Filter Component

  return (
    <>
      <pageContext.Provider value={{ page, setPage , searchMovie ,setSearchMovie }}>
        <Filter/>
        {!isLoading ? (
          <div className="home_container">
            {movies.length !== 0 ? (
              <>
                <div className="movies_cards">{moviescomp}</div>
                <PaginationComp />
              </>
            ) : (
              <div className="noMovieMsg">No movie avalible</div>
            )}
          </div>
        ) : (
          <div className="home_container loadingScreenContainer">
            <img className="loadingScreen" src={loading} alt="" />
          </div>
        )}
      </pageContext.Provider>
    </>
  );
}

export default HomeScreen;
export { pageContext };
