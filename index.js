var letters = document.getElementsByClassName("letters")
var usedLetters = document.getElementById("usedLetters")
var pokemonName = document.getElementById("pokemonName")
var life1 = document.getElementById("life1")
var life2 = document.getElementById("life2")
var life3 = document.getElementById("life3")
var life4 = document.getElementById("life4")
var life5 = document.getElementById("life5")
var life6 = document.getElementById("life6")
var pokeImg = document.getElementById("pokeImg")
var pokeImg2 = document.getElementById("pokeImg2")
var pokeImg3 = document.getElementById("pokeImg3")
var pokeInfo = document.getElementById("pokeInfo")
var hintBttn = document.getElementById("hintBttn")
var hintBox = document.getElementById("hintBox")
var type = document.getElementById("type")
var type2 = document.getElementById("type2")
var resetBttn = document.getElementById("resetBttn")
var resetLink = document.getElementById("resetLink")
var youWin = document.getElementById("youWin")
var youLose = document.getElementById("youLose")
var loseText = document.getElementById("loseText")
var score = document.getElementById("score")
var timer = document.getElementById("timer")
var dexContent = document.getElementById("dexContent")
var dexEntry = document.getElementById("dexEntry")
var caller = document.getElementById("caller")
var modalText = document.getElementById("modalText")
var entries = []
var lives
var slideIndex

class Pokedex1{
  constructor(name, dexNum, type, type2, description){
    this.name = name;
    this.dexNum = dexNum;
    this.type = type;
    this.type2 = type2;
    this.description = description;
    entries.push(this)
  }
}

var entry1 = new Pokedex1("Bulbasaur", 1, "Grass", "Poison", "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.")
var entry2 = new Pokedex1("Ivysaur", 2, "Grass", "Poison", "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.")
var entry3 = new Pokedex1("Venusaur", 3, "Grass", "Poison", "By spreading the broad petals of its flower and catching the sun's rays, it fills its body with power.")
var entry4 = new Pokedex1("Charmander", 4, "Fire", "", "The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.")
var entry5 = new Pokedex1("Charmeleon", 5, "Fire", "", "It is very hot-headed by nature, so it constantly seeks opponents. It calms down only when it wins.")
var entry6 = new Pokedex1("Charizard", 6, "Fire", "Flying", "Breathing intense, hot flames, it can melt almost anything. Its breath inflicts terrible pain on enemies.")
var entry7 = new Pokedex1("Squirtle", 7, "Water", "", "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.")
var entry8 = new Pokedex1("Wartortle", 8, "Water", "", "It cleverly controls its furry ears and tail to maintain its balance while swimming.")
var entry9 = new Pokedex1("Blastoise", 9, "Water", "", "The rocket cannons on its shell fire jets of water capable of punching holes through thick steel.")
var entry10 = new Pokedex1("Caterpie", 10, "Bug", "", "Its feet have suction cups designed to stick to any surface. It tenaciously climbs trees to forage.")
var entry11 = new Pokedex1("Metapod", 11, "Bug", "", "Inside the shell, it is soft and weak as it prepares to evolve. It stays motionless in the shell.")
var entry12 = new Pokedex1("Butterfree", 12, "Bug", "Flying", "Its wings, covered with poisonous powders, repel water. This allows it to fly in the rain.")
var entry13 = new Pokedex1("Weedle", 13, "Bug", "Poison", "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.")
var entry14 = new Pokedex1("Kakuna", 14, "Bug", "Poison", "Although it is a cocoon, it can move a little. It can extend its poison barb if it is attacked.")
var entry15 = new Pokedex1("Beedrill", 15, "Bug", "Poison", "It can take down any opponent with its powerful poison stingers. It sometimes attacks in swarms.")
var entry16 = new Pokedex1("Pidgey", 16, "Normal", "Flying", "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.")
var entry17 = new Pokedex1("Pidgeotto", 17, "Normal", "Flying", "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.")
var entry18 = new Pokedex1("Pidgeot", 18, "Normal", "Flying", "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.")
var entry19 = new Pokedex1("Rattata", 19, "Normal", "", "Bites anything when it attacks. Small and very quick, it is a common sight in many places.")
var entry20 = new Pokedex1("Raticate", 20, "Normal", "", "Gnaws on anything with its tough fangs. It can even topple concrete buildings by gnawing on them.")
var entry21 = new Pokedex1("Spearow", 21, "Normal", "Flying", "Very protective of its territory, it flaps its short wings busily to dart around at high speed.")
var entry22 = new Pokedex1("Fearow", 22, "Normal", "Flying", "It shoots itself suddenly high into the sky, then plummets down in one fell swoop to strike its prey.")
var entry23 = new Pokedex1("Ekans", 23, "Poison", "", "Moves silently and stealthily. Eats the eggs of birds, such as Pidgey and Spearow, whole.")
var entry24 = new Pokedex1("Arbok", 24, "Poison", "", "Transfixing prey with the face-like pattern on its belly, it binds and poisons the frightened victim.")
var entry25 = new Pokedex1("Pikachu", 25, "Electric", "", "It keeps its tail raised to monitor its surroundings. If you yank its tail, it will try to bite you.")
var entry26 = new Pokedex1("Raichu", 26, "Electric", "", "When its electricity builds, its muscles are stimulated, and it becomes more aggressive than usual.")
var entry27 = new Pokedex1("Sandshrew", 27, "Ground", "", "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.")
var entry28 = new Pokedex1("Sandslash", 28, "Ground", "", "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.")
var entry29 = new Pokedex1("Nidoran", 29, "Poison", "", "A mild-mannered Pokémon that does not like to fight. Beware, its small horns secrete venom.")
var entry30 = new Pokedex1("Nidorina", 30, "Poison", "", "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.")
var entry31 = new Pokedex1("Nidoqueen", 31, "Poison", "Ground", "It uses its scaly rugged body to seal the entrance of its nest and protect its young from predators.")
var entry32 = new Pokedex1("Nidoran", 32, "Poison", "", "Its large ears are always kept upright. If it senses danger, it will attack with a poisonous sting.")
var entry33 = new Pokedex1("Nidorino", 33, "Poison", "", "Quick to anger, it stabs enemies with its horn to inject a powerful poison when it becomes agitated.")
var entry34 = new Pokedex1("Nidoking", 34, "Poison", "Ground", "Its steel-like hide adds to its powerful tackle. Its horns are so hard, they can pierce a diamond.")
var entry35 = new Pokedex1("Clefairy", 35, "Normal", "", "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.")
var entry36 = new Pokedex1("Clefable", 36, "Normal", "", "Said to live in quiet, remote mountains, this type of fairy has a strong aversion to being seen.")
var entry37 = new Pokedex1("Vulpix", 37, "Fire", "", "Both its fur and its tails are beautiful. As it grows, the tails split and form more tails.")
var entry38 = new Pokedex1("Ninetales", 38, "Fire", "", "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.")
var entry39 = new Pokedex1("Jigglypuff", 39, "Normal", "", "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep.")
var entry40 = new Pokedex1("Wigglytuff", 40, "Normal", "", "Their fur feels so good that if two of them snuggle together, they won't want to be separated.")
var entry41 = new Pokedex1("Zubat", 41, "Poison", "Flying", "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.")
var entry42 = new Pokedex1("Golbat", 42, "Poison", "Flying", "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.")
var entry43 = new Pokedex1("Oddish", 43, "Grass", "Poison", "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.")
var entry44 = new Pokedex1("Gloom", 44, "Grass", "Poison", "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.")
var entry45 = new Pokedex1("Vileplume", 45, "Grass", "Poison", "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.")
var entry46 = new Pokedex1("Paras", 46, "Bug", "Grass", "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.")
var entry47 = new Pokedex1("Parasect", 47, "Bug", "Grass", "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.")
var entry48 = new Pokedex1("Venonat", 48, "Bug", "Poison", "Its large eyes act as radars. In a bright place, you can see that they are clusters of many tiny eyes.")
var entry49 = new Pokedex1("Venomoth", 49, "Bug", "Poison", "The powdery scales on its wings are hard to remove. They also contain poison that leaks out on contact.")
var entry50 = new Pokedex1("Diglett", 50, "Ground", "", "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.")
var entry51 = new Pokedex1("Dugtrio", 51, "Ground", "", "A team of triplets that can burrow over 60 MPH. Due to this, some people think it's an earthquake.")

setTimeout(newGame(), 1000);

function newGame(){
  timer.innerHTML = 01 + ":" + 31;
  points = 0;
  lives = 6;
  generateName();
  livesDisplay();
  startTimer();
  score.innerHTML = points

  function generateName(){
    for(let x=0; x<letters.length; x++){letters[x].disabled = false;}
    guessedLetters = [];
    usedLetters.innerHTML = ""
    randomNum = Math.floor(Math.random() * Math.floor(entries.length));
    pokeActual = entries[randomNum].name.toUpperCase().split("");
    pokeHidden = pokeActual.map(function(x){return "_"});
    pokemonName.innerHTML = pokeHidden.join(" ");
    hintDisplay();
  }

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
    // var hintShow = false;
    // hintBox.style.visibility = "hidden";
    // hintBttn.innerHTML = "Show Hint"
    type.innerHTML = entries[randomNum].type;
    type2.innerHTML = entries[randomNum].type2;
    type.style.backgroundColor = typeColor(entries[randomNum].type)
    if (type2.innerHTML===""){
      type2.style.visibility = "hidden"
    }
    else {
      type2.style.visibility = "visible"
      type2.style.backgroundColor = typeColor(entries[randomNum].type2)
    }
    // hintBttn.addEventListener("click", function(){
    //   if (hintShow === false){
    //     hintBox.style.visibility = "visible";
    //     hintBttn.innerHTML = "Hide Hint";
    //     hintShow = true;
    //   } else {
    //     hintBox.style.visibility = "hidden";
    //     hintBttn.innerHTML = "Show Hint"
    //     hintShow = false;
    //   }
    // })
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
        usedLetters.innerHTML = guessedLetters.join(", ");
        letters[i].disabled = true;
      }
      if(pokeHidden.includes('_')==false){
        // winModal();
        var contentWin = document.createElement("div")
        contentWin.setAttribute("class", "contentWin");
        // contentWin.classList.add("fade");
        contentWin.classList.add("mySlides");
        var dexDisplay = document.createElement("div")
        dexDisplay.setAttribute("class", "dexDisplay");
        contentWin.appendChild(dexDisplay);
        var pokeImg = document.createElement("img")
        pokeImg.setAttribute("class", "pokeImg");
        pokeImg.src = "images/officialArt/"+entries[randomNum].dexNum+".png"
        var pokeImg2 = document.createElement("img")
        pokeImg2.setAttribute("class", "pokeImg2");
        pokeImg2.src = "images/sprites/"+entries[randomNum].dexNum+".png"
        dexDisplay.appendChild(pokeImg);
        dexDisplay.appendChild(pokeImg2);
        var dexInfo = document.createElement("div");
        dexInfo.setAttribute("class", "dexInfo");
        var pokeInfo = document.createElement("p");
        pokeInfo.setAttribute("class", "pokeInfo");
        pokeInfo.innerHTML = entries[randomNum].description;
        dexInfo.appendChild(pokeInfo);
        contentWin.appendChild(dexInfo);
        dexEntry.appendChild(contentWin);

        setTimeout (function(){
          generateName();}, 500);

        points ++;
        score.innerHTML = points;
      }
    })
  }
}

function typeColor(type){
  if (type.toLowerCase()==="bug"){
    return "#a8b820"
  } else if (type.toLowerCase()==="water"){
    return "#6890f0"
  } else if (type.toLowerCase()==="fire"){
    return "#f08030"
  } else if (type.toLowerCase()==="grass"){
    return "#77c950"
  } else if (type.toLowerCase()==="electric"){
    return "#f8d030"
  } else if (type.toLowerCase()==="ice"){
    return "#98d8d9"
  } else if (type.toLowerCase()==="dragon"){
    return "#7038f8"
  } else if (type.toLowerCase()==="ground"){
    return "#e0c068"
  } else if (type.toLowerCase()==="rock"){
    return "#b8a038"
  } else if (type.toLowerCase()==="flying"){
    return "#a88ff0"
  } else if (type.toLowerCase()==="poison"){
    return "#9f40a0"
  } else if (type.toLowerCase()==="psychic"){
    return "#f85788"
  } else if (type.toLowerCase()==="ghost"){
    return "#6f5798"
  } else if (type.toLowerCase()==="fighting"){
    return "#c03028"
  } else if (type.toLowerCase()==="normal"){
    return "#a8a878"
  } else {}
}

function winModal(){
  setTimeout (function(){youWin.style.display = "block";}, 1000);
}

function loseModal(){
  setTimeout (function(){youWin.style.display = "block";}, 1000);
  caller.src = "images/gary-lose.png"
  if (score.innerHTML = "0"){
    modalText.innerHTML = "It was "+entries[randomNum].name+"! You'll never be a Pokemon Champion!"
  } else {
  modalText.innerHTML = "It was "+entries[randomNum].name+"! Looks like you're out of Pokeballs!"
  }
}

function startTimer(){
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}

  document.getElementById('timer').innerHTML =
  m + ":" + s;
  setTimeout(startTimer, 1000);

    if(m == 0 && s == 00){
      slideIndex = 1;
      winModal();
      showSlides(slideIndex);
    }
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

var prevEntry = document.getElementById("prevEntry")
prevEntry.addEventListener("click", function(){
  plusSlides(-1)})
var nextEntry = document.getElementById("nextEntry")
nextEntry.addEventListener("click", function(){
  plusSlides(1)})
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

resetLink.addEventListener('click', function(){
  while (dexEntry.firstChild) {
    dexEntry.removeChild(dexEntry.firstChild);
  }
  youWin.style.display = "none"
  location.reload();
});

resetLink2.addEventListener('click', function(){
  while (dexEntry.firstChild) {
    dexEntry.removeChild(dexEntry.firstChild);
  }
  youLose.style.display = "none"
  location.reload();
});

resetBttn.addEventListener('click', function(){
  while (dexEntry.firstChild) {
    dexEntry.removeChild(dexEntry.firstChild);
  }
  location.reload();
});
