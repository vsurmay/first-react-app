import "./Hero.scss";
import React from "react";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import image from "../../img/hero.png";
import { useSelector } from "react-redux/es/exports";

function Hero({ setCurrentPage }) {
  const data = useSelector((state) => state.dish.data);
  return (
    <section className="section__hero">
      <div className="container-less">
        <div className="hero">
          <div className="hero__item">
            <Title className="hero__title">Yummy Recipes</Title>
            <Text className="hero__text">
              we have a lot of yummy recipes from all aruond the world.
            </Text>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage({ page: "List", data });
              }}
              className="hero__btn"
            >
              See Recipes
            </Button>
          </div>
          <div className="hero__item">
            <img src={image} alt="burger image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
