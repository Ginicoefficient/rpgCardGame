const characterOptions = [
  {
    elementId: "hero",
    charClass: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    dice: 6,
  },
  {
    elementId: "monster",
    charClass: "Orc",
    avatar: "images/orc.png",
    health: 10,
    dice: 4,
  },
];

function renderCharacter(characterName) {
  let innerHtml = document.getElementById("main").innerHTML;
  const character = characterOptions.find(
    (character) => character.charClass === characterName
  );
  if (character) {
    innerHtml += `<div id="${character.elementId}">
                <div class="character-card">
                    <h4 class="name">${character.charClass}</h4>
                    <img class="avatar" src="${character.avatar}"/>
                    <p class="health">health: <b> ${character.health} </b></p>
                    <div class="dice-container"><div class="dice"> ${character.dice} </div></div>
                </div>    
            </div>`;
  }
  document.getElementById("main").innerHTML = innerHtml;
}

renderCharacter("Wizard");
renderCharacter("Orc");
