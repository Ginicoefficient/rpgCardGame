const characterOptions = [
  {
    elementId: "hero",
    charClass: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3,
  },
  {
    elementId: "monster",
    charClass: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1,
  },
];

function renderCharacter(characterName) {
  let innerHtml = document.getElementById("main").innerHTML;
  const character = characterOptions.find(
    (character) => character.charClass === characterName
  );
  let diceHtml = getDiceHtml(character.diceCount);

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
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6 + 1);
  });
}

function getDiceHtml(diceCount) {
  let diceHtml = ``;
  diceHtml = getDiceRollArray(diceCount)
    .map(function (roll) {
      return `<div class="dice">${roll}</div>`;
    })
    .join("");
  return diceHtml;
}
