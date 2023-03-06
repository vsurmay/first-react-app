import Header from "../../components/Header/Header";
import Hero from "./Hero/Hero";
import Recipes from "./Recipes/Recipes";

function Page() {
  return (
    <div className="page-page">
      <Hero />
      <Recipes />
    </div>
  );
}

export default Page;
