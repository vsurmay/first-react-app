import "./Hero.scss";
import React from "react";
import ContextCurrentPage from "../../ContextCurrentPage";
import Title from "../../UI/Title/Title";
import Text from "../../UI/Text/Text";
import Button from "../../UI/Button/Button";
import image from "../../img/hero.png";

function Hero() {
  const contextData = React.useContext(ContextCurrentPage);

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
                contextData.setCurrentPage({
                  page: "List",
                  data: contextData.data,
                });
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
