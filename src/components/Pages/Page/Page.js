import "./Page.scss";
import Header from "../../Header/Header";
import Hero from "../../Hero/Hero";
import Recipes from "../../Recipes/Recipes";

function Page() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Recipes />
    </div>
  );
}

export default Page;
