import "./Hero.scss";
import image from "../Hero/burger-img.png";

function Hero() {
  return (
    <section className="section__hero">
      <div className="container-less">
        <div className="hero">
          <div className="hero__item"></div>
          <div className="hero__item">
            <img src={image} alt="burger image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
