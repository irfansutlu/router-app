import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ( data ) => {
  const navigate = useNavigate();
      const { src, body, title, url, id } = data;
      return (
        <div className="box" key={id} onClick={() => navigate(url)}>
          <img src={src} alt="" />
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
      );
};

export default Card;
