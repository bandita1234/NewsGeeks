import React from "react";
import '../css/card.css';

const Card = ({img,heading,desc,readmore,author}) => {
  return (
    <div>
      <div className="card">
        <div className="card_img">
          <img src={img} alt="news" />
        </div>
        <div className="card_desc">
          <h3>{heading}</h3>
          <p>
          {desc}
          </p>
        </div>
        <div className="footer">
        <p>
        By: {author?author:"Anonymous"}
        </p>
        <a href={readmore} target="_blank">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
