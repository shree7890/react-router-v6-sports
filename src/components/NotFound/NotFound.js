import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>404 error page , server page not found</h1>
      <button onClick={handleOnClick} className="btn btn-secondary">
        got to back
      </button>
    </div>
  );
};

export default NotFound;
