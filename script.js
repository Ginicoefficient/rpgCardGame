import characterOptions from "./data.js";
import Character from "./Character.js";

document.getElementById("attack-button").addEventListener("click", attack);

function attack() {
  wizard.getDiceHtml;
  orc.getDiceHtml;
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  render();
}

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterOptions.hero);
const orc = new Character(characterOptions.monster);
render();
