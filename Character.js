//constructor function to add new character objects
import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

function Character(data) {
  Object.assign(this, data); //info from character data is added to character constructor object

  this.maxHealth = this.health;
  this.getCharacterHtml = function () {
    const { elementId, charClass, avatar, health, diceCount, diceArray } = this;
    const diceHtml = this.getDiceHtml(diceCount);
    const healthBar = this.getHealthBarHtml();
    return `<div class="character-card">
            <h4 class="name"> ${charClass} </h4>
            <img class="avatar" src="${avatar}" />
            ${healthBar}
            <div class="health">health: <b> ${health} </b> </div>
            
            <div class="dice-container">    
                ${diceArray}
            </div>
        </div>`;
  };

  //set's the initial dice to empty placeholders
  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  //called when attack happens - updates currentDiceDcore based on diceCount and the random roller function
  //then sets the array depicted into numbers of the current score
  this.getDiceHtml = function (diceCount) {
    this.currentDiceScore = getDiceRollArray(diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => `<div class="dice">${num}</div>`)
      .join("");
  };

  //accepts parameter that is currentDiceScore
  //reduces to a single score and subtracts from current health
  //IF the damage is less than overall health
  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce(
      (total, current) => total + current
    );
    if (this.health > totalAttackScore) {
      this.health -= totalAttackScore;
    }
    if (this.health <= totalAttackScore) {
      this.health = 0;
      this.isDead = true;
    }
  };
  this.getHealthBarHtml = function () {
    const percent = getPercentageHealth(this.health, this.maxHealth);
    return percent;
  };

  this.getHealthBarHtml = function () {
    const percent = getPercentageHealth(this.health, this.maxHealth);
    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent <= 25 ? "danger" : ""}" 
                  style="width: ${percent}%;">
                </div>
            </div>`;
  };
}

const getPercentageHealth = (remainingHealth, maxHealth) => {
  return (remainingHealth / maxHealth) * 100;
};
export default Character;
