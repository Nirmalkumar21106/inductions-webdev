var space = document.getElementById("sheet")
console.log(space)
var cnxt = space.getContext('2d');
var myGamePiece;
var upper = [];
var lower = [];
var interval = 0,
    interval1 = 0
var onclks_count = 0
space.width = 750
space.height = 450
var w_upper = 0,
    j_upper = 2,
    w_lower = 0,
    j_lower = 1


function startGame() {
    myGamePiece = new component(30, 250, 50, 50, 'red');
    upper.push(new component(0, 0, 750, 150, 'black'))
    lower.push(new component(0, 300, 600, 150, 'black'))
    this.interval = setInterval(updateGameArea, 8);
}

function updateGameArea() {
    cnxt.clearRect(0, 0, space.width, space.height);
    interval += 1
    if ((w_upper + j_upper) == interval) {
        w_upper = Math.floor((Math.random() * (750 - 100)) + 100)
        j_upper = Math.floor((Math.random() * (200 - 70)) + 70)
        upper.push(new component(750, 0, w_upper, 150, 'black'))
        interval = 0
    }
    upper.forEach(element => {
        element.x -= 1
        element.update()
    });
    interval1 += 1
    if ((w_lower + j_lower) == interval1) {
        w_lower = Math.floor((Math.random() * (750 - 100)) + 100)
        j_lower = Math.floor((Math.random() * (200 - 70)) + 70)
        lower.push(new component(750, 300, w_lower, 150, 'black'))
        interval1 = 0
    }

    lower.forEach(piece => {
        piece.x -= 1
        piece.update()
    });

    myGamePiece.update()
}

function component(x, y, width, height, colour) {
    this.x = x
    this.width = width
    this.height = height
    this.colour = colour
    this.y = y;
    this.update = function() {
        cnxt.fillStyle = this.colour
        cnxt.fillRect(this.x, this.y, this.width, this.height);
    }
}
space.addEventListener("click", move)

function move() {
    if (onclks_count == 0) {
        myGamePiece.y -= 100
        onclks_count = 1
    } else {
        myGamePiece.y += 100
        onclks_count = 0
    }
}