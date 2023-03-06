import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import data from "../../data";
import "./Recipes.scss";

function Recipes() {
  console.log(data);
  return (
    <section className="section__recipes">
      <div className="container">
        <div className="recipes">
          <Title center>Recipes</Title>
          <div className="recipes__wrapper">
            {data.map((el) => (
              <RecipesItem key={el.id} element={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
