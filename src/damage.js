import { Pokemon, pokemons } from "./data-pokemon";

function damage(heroType, oponentType, attackPower, oponentDeffense) {
  if (!pokemons.includes(heroType) || !pokemons.includes(oponentType))
    return "Give corect data, please";

  const myPokemon = new Pokemon(heroType);
  let effectiveness;

  switch (oponentType) {
    case "fire":
      effectiveness = myPokemon.againstFire();
      break;
    case "water":
      effectiveness = myPokemon.againstWater();
      break;
    case "grass":
      effectiveness = myPokemon.againstGrass();
      break;
    case "electric":
      effectiveness = myPokemon.againstElectric();
      break;
  }

  return 50 * (attackPower / oponentDeffense) * effectiveness;
}

export default damage;
