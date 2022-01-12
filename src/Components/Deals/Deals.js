import React from "react";
import { Card } from "../Common/Card";
import image1 from "../../Assets/images/deals/1.webp";
import image2 from "../../Assets/images/deals/2.webp";
import image3 from "../../Assets/images/deals/3.webp";
import image4 from "../../Assets/images/deals/4.webp";
import image5 from "../../Assets/images/deals/5.webp";

export const Deals = (props) => {
  return (
    <div className="deals">
      <h1>DEAL OF THE DAY</h1>
      <p>A variety of products for the deal of the day</p>
      <div className="deals__list">
        <Card img={image1} />
        <Card img={image2} />
        <Card img={image3} />
        <Card img={image4} />
        <Card img={image5} />
      </div>
    </div>
  );
};
