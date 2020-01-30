import React from "react";

import Card from "../card/card.component";

import "./card-list.style.css";

const CardList = props => {
  //   console.log(props);
  return (
    <React.Fragment>
      <div className="card-list">
        {/* {props.children} :::: gives whatever is defined between the component*/}
        {props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardList;
