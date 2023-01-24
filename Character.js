//constructor function to add new character objects
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  //set's the initial dice to empty placeholders
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getCharacterHtml = function () {
    const { elementId, charClass, avatar, health, diceCount, diceArray } = this;
    const diceHtml = this.getDiceHtml(diceCount);

    return `<div class="character-card">
            <h4 class="name"> ${charClass} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">    
                ${diceArray}
            </div>
        </div>`;
  };

  //called when attack happens - updates currentDiceDcore based on diceCount and the random roller function
  //then sets the array depicted into numbers of the current score
  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };
}

export default Character;