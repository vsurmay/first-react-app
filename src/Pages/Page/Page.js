import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";

function Page(props) {
  return (
    <div className="page-page">
      <Hero />
      <Recipes data={props.data} />
    </div>
  );
}

export default Page;
