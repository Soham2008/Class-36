var ball;

//Step 1
var database;

var form, game, player;

var gameState = 0;

var playerCount;

//Form object
//Player object
//Game object

function setup() {
    // Step 2
    database = firebase.database()

    createCanvas(500, 500);
    game = new Game()
    game.getState()
    game.start()
}

function draw() {

}