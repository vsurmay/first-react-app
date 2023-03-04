import "./Hero.scss";
import image from "../Hero/burger-img.png";
import Title from "../Pages/Page/PageTitle/Title";
import PageText from "../Pages/Page/PageText/PageText";
import Button from "../Button/Button";

function Hero() {
  return (
    <section className="section__hero">
      <div className="container-less">
        <div className="hero">
          <div className="hero__item">
            <Title className="hero__title">Yummy Recipes</Title>
            <PageText className="hero__text">
              we have a lot of yummy recipes from all aruond the world.
            </PageText>
            <Button className="hero__btn">See Recipes</Button>
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
