import React from "react";

import "./card.style.css";

const Card = props => {
  return (
    <React.Fragment>
      <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
      </div>
    </React.Fragment>
  );
};

export default Card;
