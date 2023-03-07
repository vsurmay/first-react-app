const pokemons = ["fire", "water", "grass", "electric"];
const fire = [1, 2, 0.5, 1];
const water = [0.5, 1, 2, 2];
const grass = [2, 0.5, 1, 1];
const electric = [1, 0.5, 1, 1];

class Pokemon {
  constructor(name) {
    this.name = name;
    this.index = pokemons.indexOf(name);
  }

  againstFire() {
    return fire[this.index];
  }

  againstWater() {
    return water[this.index];
  }

  againstGrass() {
    return grass[this.index];
  }

  againstElectric() {
    return electric[this.index];
  }
}

export { Pokemon, pokemons };
