'use strict'


class Card {

  static DefaultPriceBuy = 3
  static DefaultPriceSell = 1

  constructor(options) {
    this.name = options.name;
    this.levelTavern = options.levelTavern;
    this.characteristics = options.characteristics;
    this.priceBuy = (options.priceBuy === undefined) ? Card.DefaultPriceBuy : options.priceBuy;
    this.priceSell = (options.priceSell === undefined) ? Card.DefaultPriceSell : options.priceSell;
    this.battlecry = (options.battlecry === undefined) ? null : options.battlecry;
    this.deathrattle = (options.deathrattle === undefined) ? null : options.deathrattle;
    this.peculiarProperties = (options.peculiarProperties === undefined) ? null : options.peculiarProperties;
  }
  voice() {
    let result = ``;

    if (this.typeCard != undefined) result += `I am ${this.typeCard}!\n`;

    result += `My name is ${this.name}\n`;

    result += `My characteristics is ${this.characteristics}\n`;

    if (this.priceBuy != 3)
      result += `I'm not standing like all the usual cards! ${this.priceBuy}!\n`;

    if (this.priceSell != 1)
      result += `If you sell me, you'll get ${this.priceSell} coins!\n`;

    if (this.battlecry != null)
      result += `My battlecry: ` + this.battlecry + `\n`;

    if (this.deathrattle != null)
      result += `My deathrattle: ` + this.deathrattle + `\n`;

    if (this.peculiarProperties != null)
      result += `I am very special! I have: ${this.peculiarProperties}`;

    return result;
  }
}

class Elemental extends Card{
  constructor(options) {
    super(options);
    this.typeCard = 'Elemental';
  }
}

class Mech extends Card {
  constructor(options) {
    super(options);
    this.typeCard = "Mech";
  }
}

class Pirate extends Card {
  constructor(options) {
    super(options);
    this.typeCard = "Pirate";
  }
}

class Demon extends Card {
  constructor(options) {
    super(options);
    this.typeCard = "Demon";
  }
}


let refreshingAnomaly = new Elemental ({
  name: 'Refreshing Anomaly',
  levelTavern: 1,
  characteristics: [1,4],
  battlecry: 'Your next refresh costs (0)',
})

let replicatingMenace = new Mech({
  name: "Replicating Menace",
  levelTavern: 3,
  characteristics: [3, 2],
  deathrattle: "Summon three 1/1 Microbots",
});

let tunnelBlaster = new Card ({
  name: "Tunnel Blaster",
  levelTavern: 4,
  characteristics: [3, 7],
  deathrattle: "Deal 3 damage to ALL minions",
  peculiarProperties: ["Taunt"],
});

let freedealingGambler = new Pirate({
  name: "Freedealing Gambler",
  levelTavern: 2,
  characteristics: [3, 3],
  priceSell: 3,
});

let leechingFelhound = new Demon({
  name: "Leeching Felhound",
  levelTavern: 3,
  characteristics: [3, 3],
  priceBuy: 0,
});


function addOrRemove (id) {
  if (id.classList.contains('event')) {
    id.classList.remove('event');
  } else id.classList.add('event');
};

let refAnoHero = document.querySelector("#refreshingAnomaly");
let repMenHero = document.querySelector("#replicatingMenace");
let tunBlaHero = document.querySelector("#tunnelBlaster");
let freGamHero = document.querySelector("#freedealingGambler");
let leeFelHero = document.querySelector("#leechingFelhound");

refAnoHero.addEventListener("click", () => {
  let refAnoModule = document.querySelector("#refAnoModule");

  addOrRemove(refAnoModule);

  document.querySelector("#refAnoDescription").textContent =
    refreshingAnomaly.voice();
});

repMenHero.addEventListener("click", () => {
  let repMenModule = document.querySelector("#repMenModule");

  addOrRemove(repMenModule);

  document.querySelector("#repMenDescription").textContent =
    replicatingMenace.voice();
});

tunBlaHero.addEventListener("click", () => {
  let tunBlaModule = document.querySelector("#tunBlaModule");

  addOrRemove(tunBlaModule);

  document.querySelector("#tunBlaDescription").textContent =
    tunnelBlaster.voice();
});

freGamHero.addEventListener("click", () => {
  let freGamModule = document.querySelector("#freGamModule");

  addOrRemove(freGamModule);

  document.querySelector("#freGamDescription").textContent =
    freedealingGambler.voice();
});

leeFelHero.addEventListener("click", () => {
  let leeFelModule = document.querySelector("#leeFelModule");

  addOrRemove(leeFelModule);

  document.querySelector("#leeFelDescription").textContent =
    leechingFelhound.voice();
});