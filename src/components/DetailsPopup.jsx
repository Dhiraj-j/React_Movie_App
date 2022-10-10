import Modal from "react-bootstrap/Modal";
import "./detailsPopUp.css";
import NoImg from "../assets/No.png";
import ShowMoreText from "react-show-more-text";
function DetailsPopup(props) {
  return (
    <Modal
      className="movieModal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header className="header" closeButton>
      <Modal.Title className="header" id="contained-modal-title-vcenter bg-dark">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}

      <div className="singleMovieContainer">
        <div className="singleMovieImg">
          <img
            src={
              props.data.poster_path == null
                ? NoImg
                : `https://image.tmdb.org/t/p/original/${props.data.poster_path}`
            }
            alt=""
          />
        </div>
        <div className="singleMovieDetails">
          <div className="singleMovieTitle">{props.data.title}</div>

          <div className="singleMovieTagline">{props.data.tagline}</div>
          <div className="releaseDate">
            Release Date: {props.data.release_date}
          </div>
          <div className="runtime">Duration: {props.data.runtime} Mins</div>
          {props.data.spoken_languages.map((key) => {
              return <span className="lang">{key.name}</span>;
            })}

          <div className="desc">
            <ShowMoreText
              lines={4}
              more="Read more"
              less="Show less"
              truncatedEndingComponent={"...."}
            >
              {props.data.overview}
            </ShowMoreText>

            
          </div>
        </div>
      </div>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default DetailsPopup;
