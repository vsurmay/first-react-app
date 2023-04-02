import Hero from "../../components/Hero/Hero";
import Recipes from "../../components/Recipes/Recipes";

function Page({ setCurrentPage }) {
  return (
    <div className="page-page">
      <Hero setCurrentPage={setCurrentPage} />
      <Recipes setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Page;
