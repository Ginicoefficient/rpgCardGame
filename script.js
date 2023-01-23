const characterOptions = [
  {
    elementId: "hero",
    charClass: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    dice: [4, 3, 1],
    diceCount: 3,
  },
  {
    elementId: "monster",
    charClass: "Orc",
    avatar: "images/orc.png",
    health: 10,
    dice: [2],
    diceCount: 1,
  },
];

function renderCharacter(characterName) {
  let innerHtml = document.getElementById("main").innerHTML;
  const character = characterOptions.find(
    (character) => character.charClass === characterName
  );
  let diceHtml = [];
  diceHtml = character.dice
    .map(function (die) {
      return `<div class="dice">${die}</div>`;
    })
    .join("");

  if (character) {
    innerHtml += `<div id="${character.elementId}">
                <div class="character-card">
                    <h4 class="name">${character.charClass}</h4>
                    <img class="avatar" src="${character.avatar}"/>
                    <p class="health">health: <b> ${character.health} </b></p>
                    <div class="dice-container">${diceHtml}</div>
                </div>    
            </div>`;
  }
  document.getElementById("main").innerHTML = innerHtml;
}

renderCharacter("Wizard");
renderCharacter("Orc");

function getDiceRollArray(diceCount) {
  randomRoll = [];
  for (i = 0; i <= diceCount; i++) {
    randomRoll.push(Math.floor(Math.random() * 6 + 1));
  }
  return randomRoll;
}
