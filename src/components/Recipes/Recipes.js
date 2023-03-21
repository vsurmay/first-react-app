import Title from "../../UI/Title/Title";
import RecipesItem from "../RecipesItem/RecipesItem";
import axios from "axios";
// import data from "../../data";
import "./Recipes.scss";
import { useEffect, useState } from "react";

function Recipes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/recipes/")
      .then((res) => setData(res.data));
  }, []);

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
