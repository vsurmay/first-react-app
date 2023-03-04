import Title from "../Title/Title";
import "./Recipes.scss";

function Recipes() {
  return (
    <section className="section__recipes">
      <div className="container">
        <div className="recipes">
          <Title center>Recipes</Title>
          <div className="recipes__wrapper"></div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
