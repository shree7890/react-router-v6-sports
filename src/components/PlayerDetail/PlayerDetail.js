import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import male from "../../images/male.jpg";
import female from "../../images/female.jpg";
const PlayerDetail = () => {
  const [playerDetails, setPlayerDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlayerDetails(data.players[0]));
  }, [id]);
  const handleClick = () => {
    navigate("/players");
  };
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div>
              {playerDetails?.strGender === "Male" ? (
                <img className="w-50 mx-auto" src={male} alt="male" />
              ) : (
                <img className="w-50 mx-auto" src={female} alt="female" />
              )}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <div>
              <img
                className="w-100"
                src={playerDetails?.strThumb}
                alt="imagesthumb"
              />
            </div>
            <div>
              <h3>country:{playerDetails?.strNationality}</h3>
              <p>
                decription: {playerDetails?.strDescriptionEN?.slice(0, 100)}
              </p>
              <button onClick={handleClick}>got to players</button>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
