var letters = document.getElementsByClassName("letters");

class Pokedex{
  constructor(name, dexNum, type, type2, description){
    this.dexNum = dexNum;
    this.type = type;
    this.type2 = type2;
    this.description = description;
  }
}

var bulbasaur = new Pokedex("Bulbasaur", 1, "Grass", "Poison", "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.")
var ivysaur = new Pokedex("Ivysaur", 2, "Grass", "Poison", "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.")
var venusaur = new Pokedex("Venusaur", 3, "Grass", "Poison", "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.")
var charmander = new Pokedex("Charmander", 4, "Fire", "", "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.")
