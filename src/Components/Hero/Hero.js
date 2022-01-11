import React, { useState, useEffect } from "react";
import image1 from "../../Assets/images/heroImages/1.jpg";
import image2 from "../../Assets/images/heroImages/2.webp";
import image3 from "../../Assets/images/heroImages/3.webp";
import image4 from "../../Assets/images/heroImages/5.jpg";
import image5 from "../../Assets/images/heroImages/6.webp";
import "../../Assets/css/style.scss";

export const Hero = (props) => {
  const importAll = (require) =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {});

  const images = importAll(
    require.context(
      "../../Assets/images/heroImages",
      false,
      /\.(png|jpe?g|svg|webp)$/
    )
  );

  var imageKeys = Object.keys(images);

  const [carouselState, setCarouselState] = useState(1);

  const [carouselPreviousState, setCarouselPreviousState] = useState(1);

  const changeCarouselState = (val) => {
    setCarouselPreviousState(carouselState);
    setCarouselState(val);
  };

  console.log(carouselState);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselState((carouselState) => (carouselState % 5) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [carouselState]);

  return (
    <div>
      <div className="flex__center">
        {carouselState === 1 && (
          <img
            src={image1}
            alt="image"
            className={
              carouselPreviousState === 1
                ? "carousel fill"
                : "carousel__reverse"
            }
          />
        )}
        {carouselState === 2 && (
          <img
            src={image2}
            alt="image"
            className="carousel"
            className={
              carouselState >= carouselPreviousState
                ? "carousel"
                : "carousel__reverse"
            }
          />
        )}
        {carouselState === 3 && (
          <img
            src={image3}
            alt="image"
            className="carousel"
            className={
              carouselState >= carouselPreviousState
                ? "carousel"
                : "carousel__reverse"
            }
          />
        )}
        {carouselState === 4 && (
          <img
            src={image4}
            alt="image"
            className="carousel"
            className={
              carouselState >= carouselPreviousState
                ? "carousel"
                : "carousel__reverse"
            }
          />
        )}
        {carouselState === 5 && (
          <img
            src={image5}
            alt="image"
            className="carousel"
            className={
              carouselState >= carouselPreviousState
                ? "carousel"
                : "carousel__reverse"
            }
          />
        )}
        {/* <img
          src={
            carouselState === 1
              ? image1
              : carouselState === 2
              ? image2
              : carouselState === 3
              ? image3
              : carouselState === 4
              ? image4
              : image5
          }
          alt=""
          className="carousel img-gradient"
        /> */}
      </div>
      <div className="carousel__link">
        <button
          className={carouselState === 1 ? "circle__active" : "circle"}
          onClick={() => changeCarouselState(1)}
        ></button>
        <button
          className={carouselState === 2 ? "circle__active" : "circle"}
          onClick={() => changeCarouselState(2)}
        ></button>
        <button
          className={carouselState === 3 ? "circle__active" : "circle"}
          onClick={() => changeCarouselState(3)}
        ></button>
        <button
          className={carouselState === 4 ? "circle__active" : "circle"}
          onClick={() => changeCarouselState(4)}
        ></button>
        <button
          className={carouselState === 5 ? "circle__active" : "circle"}
          onClick={() => changeCarouselState(5)}
        ></button>
      </div>
    </div>
  );
};
