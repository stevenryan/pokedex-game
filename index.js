var letters = document.getElementsByClassName("letters")
var pokemonName = document.getElementById("pokemonName")
var life1 = document.getElementById("life1")
var life2 = document.getElementById("life2")
var life3 = document.getElementById("life3")
var life4 = document.getElementById("life4")
var life5 = document.getElementById("life5")
var life6 = document.getElementById("life6")
var hintBttn = document.getElementById("hintBttn")
var hintBox = document.getElementById("hintBox")
var type = document.getElementById("type")
var type2 = document.getElementById("type2")
var resetBttn = document.getElementById("resetBttn")
var lives = 6;
var entries = []

class Pokedex{
  constructor(name, dexNum, type, type2, description){
    this.name = name;
    this.dexNum = dexNum;
    this.type = type;
    this.type2 = type2;
    this.description = description;
    entries.push(this)
  }
}

var entry1 = new Pokedex("Bulbasaur", 1, "Grass", "Poison", "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.")
var entry2 = new Pokedex("Ivysaur", 2, "Grass", "Poison", "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.")
var entry3 = new Pokedex("Venusaur", 3, "Grass", "Poison", "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.")
var entry4 = new Pokedex("Charmander", 4, "Fire", "", "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.")
var entry5 = new Pokedex("Charmeleon", 5, "Fire", "", "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.")
var entry6 = new Pokedex("Charizard", 6, "Fire", "Flying", "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.")
var entry7 = new Pokedex("Squirtle", 7, "Water", "", "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.")
var entry8 = new Pokedex("Wartortle", 8, "Water", "", "It cleverly controls its furry ears and tail to maintain its balance while swimming.")
var entry9 = new Pokedex("Blastoise", 9, "Water", "", "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.")

function newGame(){
  randomNum = Math.floor(Math.random() * Math.floor(entries.length));
  pokeActual = entries[randomNum].name.toUpperCase();
  pokeHidden = pokeActual.replace(/[a-z]/gi, "_" + " ");
  pokemonName.innerHTML = pokeHidden;

  for(let i=0; i<letters.length; i++){
    letters[i].addEventListener("click", function(){
      
    })
  }
}
