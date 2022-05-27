import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";

const Players = () => {
  const [searchText, setSearchText] = useState("");
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    try {
      setError(false);
      setLoading(true);
      fetch(
        `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchText}`
      )
        .then((res) => res.json())
        .then((data) => setPlayers(data.player));
      setLoading(false);
      setError(true);
    } catch (err) {
      console.log(err.message);
    }
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    const searchInput = e.target.value.toLowerCase();
    setSearchText(searchInput);
  };
  return (
    <div>
      <input
        className="w-25 mx-auto mt-4"
        type="text"
        placeholder="search player name"
        onChange={handleChange}
      />

      <div className="container">
        {loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {!error && <div>player not found</div>}
        {!loading && players.length > 0 && (
          <>
            <div className="row row-cols-1 row-cols-lg-4 g-4 py-5">
              {players?.map((player) => (
                <SinglePlayer
                  key={player.idPlayer}
                  player={player}
                ></SinglePlayer>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Players;
