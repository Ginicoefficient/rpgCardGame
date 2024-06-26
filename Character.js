import {
  getDiceRollArray,
  getDicePlaceholderHtml,
  getPercentage,
} from "./utils.js";

class Character {
  constructor(data) {
    Object.assign(this, data);

    this.maxHealth = this.health;

    //creates the empty placeholders based on the number of dice each character has
    this.diceHtml = getDicePlaceholderHtml(this.diceCount);

    //creates a dice roll based on the number of dice each character has and renders to html
    this.getDiceHtml = function () {
      this.currentDiceScore = getDiceRollArray(this.diceCount);
      this.diceHtml = this.currentDiceScore
        .map((num) => `<div class="dice">${num}</div>`)
        .join("");
    };

    //sums the current dice roll and subtracts from enemy health
    this.takeDamage = function (attackScoreArray) {
      const totalAttackScore = attackScoreArray.reduce(
        (total, num) => total + num
      );
      this.health -= totalAttackScore;
      if (this.health <= 0) {
        this.dead = true;
        this.health = 0;
      }
    };

    this.getHealthBarHtml = function () {
      const percent = getPercentage(this.health, this.maxHealth);

      return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
        </div>`;
    };

    this.getCharacterHtml = function () {
      const { name, avatar, health, diceCount, diceHtml } = this;
      const healthBar = this.getHealthBarHtml();
      return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`;
    };
  }
}

export default Character;
