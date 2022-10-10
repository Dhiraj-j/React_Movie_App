import axios from "axios";
import React from "react";
import DetailsPopup from "./DetailsPopup";
import "./moviecard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NoImg from '../assets/No.png'


function MovieCart(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const [singleMovieData , setSingleMovieData] = React.useState([]);

  const dataFetch = async() => {
    const url =`https://movie-task.vercel.app/api/movie?movieId=${props.movie_id}`;
    const res = await axios.get(url);
    console.log(res.data.data);
    setSingleMovieData(res.data.data);
    setModalShow(true);
  }

  return (
    <>
    <div className="movie_card_container " onClick={() => dataFetch()} >
      <div className="movie_card_detailsBG"></div>
      <img className="movie_card_img"
        src={props.poster_path==null ? NoImg :`https://image.tmdb.org/t/p/original/${props.poster_path}`}
        alt=""
        />
      <div className="movie_card_details">
        <div>{props.title}</div>
        <div>{props.release_date == null ? props.release_date : props.release_date.slice(0,4)}</div>

        <div style={{fontSize:10}}>{props.desc === '' ? props.desc : props.desc.slice(0,70)}...</div>
      </div>
    </div>
    {
      modalShow ? 
        <DetailsPopup
        show={modalShow}
        data={singleMovieData}
        onHide={() => setModalShow(false)}
        /> : <></>
    }
      </>
  );
}

export default MovieCart;
