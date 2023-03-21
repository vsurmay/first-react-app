import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";

function Page({ data }) {
  return (
    <div className="page-page">
      <Hero />
      <Recipes data={data} />
    </div>
  );
}

export default Page;
