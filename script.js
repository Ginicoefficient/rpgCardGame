import characterOptions from "./data.js";
import Character from "./Character.js";

document.getElementById("attack-button").addEventListener("click", attack);

function attack() {
  wizard.getDiceHtml;
  orc.getDiceHtml;
  orc.takeDamage(wizard.currentDiceScore);
  wizard.takeDamage(orc.currentDiceScore);
  if (wizard.isDead || orc.isDead) {
    endGame();
  }
  render();
}

function endGame() {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Orc is Victorious";

  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

  document.body.innerHTML = `<div class="end-game">
      <h2>Game Over</h2>
      <h3>${endMessage}</h3>
      <p class="end-emoji">${endEmoji}</p>
    </div>`;
}
function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterOptions.hero);
const orc = new Character(characterOptions.monster);
render();
