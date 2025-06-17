var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10 },
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 900, y: groundY - 125, damage: 15},
          { type: "enemy", x: 400, y: groundY - 50, speed: 3, damage: 10, image:"img/enemy1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "enemy", x: 900, y: groundY - 50, speed: -2, damage: 10, image:"img/enemy1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "enemy", x: 1200, y: groundY - 50, speed: -2, damage: 10,image:"img/enemy1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "reward", x: 1000, y: groundY - 55, speed: -3},
          {type: "reward", x: 1200, y: groundY - 55, speed: 3,},
          {type: "marker", x: 1500, y: groundY - 75, speed: -3},
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -4,
        gameItems: [
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 1100, y: groundY },{ type: "sawblade", x: 400, y: groundY - 125, damage: 10 },
          { type: "sawblade", x: 800, y: groundY - 125, damage: 10},
          { type: "sawblade", x: 1100, y: groundY - 125, damage: 15},
          { type: "enemy", x: 600, y: groundY - 50, speed: 3, damage: 10, image:"img/solider1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "enemy", x: 1100, y: groundY - 50, speed: 2, damage: 10, image:"img/solider1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "enemy", x: 1400, y: groundY - 50, speed: 2, damage: 10,image:"img/solider1.png", offsetX: -35, offetY: -25, scale: 0.5},
          {type: "reward", x: 1200, y: groundY - 55, speed: 3},
          {type: "reward", x: 1400, y: groundY - 55, speed: -3,},
          {type: "marker", x: 1700, y: groundY - 75, speed: -3},
          
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
