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
var entry9 = new Pokedex("Blastoiseb", 9, "Water", "", "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.")

function newGame(){
  var lives = 6;
  hintDisplay();
  livesDisplay();
  guessedLetters = []

  for(let x=0; x<letters.length; x++){letters[x].disabled = false;}

  randomNum = Math.floor(Math.random() * Math.floor(entries.length));
  pokeActual = entries[randomNum].name.toUpperCase().split("");
  pokeHidden = pokeActual.map(function(x){return "_"});
  pokemonName.innerHTML = pokeHidden.join(" ");

  function livesDisplay(){
    if (lives === 6) {
      life1.src = "images/pokeball-life.png";
      life2.src = "images/pokeball-life.png";
      life3.src = "images/pokeball-life.png";
      life4.src = "images/pokeball-life.png";
      life5.src = "images/pokeball-life.png";
      life6.src = "images/pokeball-life.png";
    } else if (lives === 5){
      life6.src = "images/lost-life.png";
    } else if (lives === 4){
      life5.src = "images/lost-life.png";
    } else if (lives === 3){
      life4.src = "images/lost-life.png";
    } else if (lives === 2){
      life3.src = "images/lost-life.png";
    } else if (lives === 1){
      life2.src = "images/lost-life.png";
    } else if (lives === 0){
      life1.src = "images/lost-life.png";
      loseModal();
    } else {}
  }

  function hintDisplay(){
    var hintShow = false;
    hintBttn.addEventListener("click", function(){
      if (hintShow === false){
        hintBox.style.visibility = "visible";
        hintBttn.innerHTML = "<i class='fas fa-times fa-2x'></i>";
        type.innerHTML = entries[randomNum].type;
        type2.innerHTML = entries[randomNum].type2;
        hintShow = true;
      } else {
        hintBox.style.visibility = "hidden";
        hintBttn.innerHTML = "<i class='fas fa-question fa-2x'></i>"
        hintShow = false;
      }
    })
  }

  function loseModal(){

  }

  function winModal(){

  }

  for(let i=0; i<letters.length; i++){
    letters[i].addEventListener("click", function(){
      if (guessedLetters.includes(letters[i].value)){
      }else{
        if (pokeActual.includes(letters[i].value)){
          for(let j=0; j<pokeActual.length; j++){
            if (pokeActual[j] === letters[i].value){
              pokeHidden.splice(j, 1, letters[i].value);
            }
          }
          pokemonName.innerHTML = pokeHidden.join(" ");
        }else{
          lives--;
          livesDisplay();
        }
        guessedLetters.push(letters[i].value);
        letters[i].disabled = true;
      }
    })
  }
}
