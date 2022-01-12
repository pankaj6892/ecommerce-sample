import React from "react";

export const Card = (props) => {
  return (
    <div className="common__card">
      <img
        src={props.img}
        alt="featured image"
        className="common__card__image"
      />
    </div>
  );
};
