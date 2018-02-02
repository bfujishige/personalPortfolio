// Enemies our player must avoid
function getRandomNum(max, min){
    return Math.floor(Math.random()*(max-min))+min;
}

var Enemy = function(row, spd) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.y = row;
    this.x = 303;
    this.speed = spd;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed*dt);
    if(this.x > 404){
        this.x = -101;
        this.y = 404-getRandomNum(5,2)*83;
        this.speed = getRandomNum(404,101);
    }
    checkCollisions();
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.sprite = 'images/char-horn-girl.png';
    this.y = 404;
    this.x = 202;
}

Player.prototype.update = function(dt){
    checkCollisions();
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(input){
    if(input === 'left'){
        if(this.x === 0){
            //noop
        }
        else{
            this.x-=101;
        }
    }
    else if(input === 'down'){
        if(this.y === 404){
            //noop
        }
        else{
            this.y+=83;
        }
    }
    else if(input === 'right'){
        if(this.x === 404){
            //noop
        }
        else{
            this.x+=101;
        }
    }
    else if(input === 'up'){
        if(this.y < 0){
            this.y = 404;
        }
        else{
            this.y-=83;
        }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
for (var i =0; i<6; i++){
    var row = getRandomNum(4,1)*83;
    var spd = getRandomNum(404,101);
    allEnemies[i] = new Enemy(row, spd);
}
var player = new Player();

function checkCollisions(){
    var collides;
    allEnemies.forEach(function(enemy){
        if(((player.x-1 <= enemy.x+50) && (player.x >= enemy.x) && (player.y === enemy.y))
        || ((player.x+1 >= enemy.x-50) && (player.x<= enemy.x) && (player.y === enemy.y))){
        player.x = 202;
        player.y = 404;
        }
    }); 
}


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});