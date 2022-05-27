import React from "react";
import { Link } from "react-router-dom";

const SinglePlayer = (props) => {
  const { strNationality, strPlayer, strTeam, idPlayer, strThumb } =
    props.player;

  return (
    <>
      {strThumb && (
        <div className="col">
          <div className="card">
            <img className="w-50 h-50 mx-auto" src={strThumb} alt="thumbnail" />
            <div className="card-body">
              <h5 className="card-title">nationality:{strNationality}</h5>
              <p className="card-text">Playe name:{strPlayer}</p>
              <p>team:{strTeam}</p>
              <Link to={`/playerDetail/${idPlayer}`}>
                <button className="btn btn-success">player detail</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SinglePlayer;
