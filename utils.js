function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(function () {
    return Math.floor(Math.random() * 6 + 1);
  });
}

function getDicePlaceholderHtml() {
  return new Array(diceCount).fill(0).map(function () {});
}

//utils hold functions that are unlikely to change and likely to be re-used

export { getDiceRollArray };
