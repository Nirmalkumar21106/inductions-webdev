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
var total_interval = 752,
    total_interval1 = 751,
    confuser = 0,
    distance = -80,
    highest_score = 0
var c = document.getElementById("points")
var d = document.getElementById("score")




function startGame() {
    myGamePiece = new component(30, 250, 50, 50, 'red', 0, 0)
    upper.push(new component(0, 0, 751, 150, 'black', 0, 0))
    lower.push(new component(0, 300, 600, 150, 'black', 150, 0))
    myGameArea.start()
}
var myGameArea = {

    start: function() {

        this.interval = setInterval(updateGameArea, 2);
    },
    clear: function() {
        cnxt.clearRect(0, 0, 750, 450);
    },
    stop: function() {

        clearInterval(this.interval);
        if (distance > localStorage.getItem(highest_score)) {
            localStorage.setItem(highest_score, distance)
            d.innerHTML = localStorage.getItem(highest_score)
        }

    }
}

function updateGameArea() {
    distance += 1
    c.innerHTML = distance
    for (i = 0; i < lower.length; i += 1) {
        if (lower[i].x > -(lower[i].width + lower[i].gap - 50)) {
            if (myGamePiece.gameover1(lower[i])) {
                myGameArea.stop()

            }
        }
    }
    for (i = 1; i < upper.length; i += 1) {
        if (upper[i].x > -(upper[i].width + upper[i].gap - 50)) {
            if (myGamePiece.gameover(upper[i], i)) {
                myGameArea.stop()

            }
        }
    }

    myGameArea.clear()
    interval += 1
    if ((w_upper + j_upper) == interval) {
        interval = 0

        w_upper = Math.floor((Math.random() * (750 - 100)) + 100)
        j_upper = Math.floor((Math.random() * (200 - 70)) + 70)
        total_interval += w_upper
        total_interval += j_upper
        upper.push(new component(750, 0, w_upper, 150, 'black', j_upper, 0))
        confuser += 1
    }
    if ((w_lower + j_lower) == interval1) {
        interval1 = 0
        w_lower = Math.floor((Math.random() * (750 - 100)) + 100)
        j_lower = Math.floor((Math.random() * (250 - 70)) + 70)
        total_interval1 += w_lower
        total_interval1 += j_lower
        lower.push(new component(750, 300, w_lower, 150, 'black', j_lower, 0))
        confuser += 1
    }
    if (confuser <= 2 && confuser > 0) {
        if (((total_interval > total_interval1) && (total_interval1 > (total_interval - j_upper))) || ((total_interval == total_interval1) && (j_upper == j_lower)) || ((total_interval < total_interval1) && (total_interval > (total_interval1 - j_lower)))) {
            upper.push(new component(750, 0, w_upper + j_upper, 150, 'black', j_upper, 1))
        }
        confuser = 0
    }
    upper.forEach(element => {
        element.x -= 1
        element.update()
    });
    interval1 += 1
    lower.forEach(piece => {
        piece.x -= 1
        piece.update()
    });
    myGamePiece.update()
}



function component(x, y, width, height, colour, gap, extras) {
    this.x = x
    this.width = width
    this.height = height
    this.colour = colour
    this.y = y;
    this.extras = extras
    this.gap = gap
    this.update = function() {
        cnxt.fillStyle = this.colour
        cnxt.fillRect(this.x, this.y, this.width, this.height);
    }
    this.gameover1 = function(obj) {
        crash = false
        if (obj.y == this.y + this.height && (obj.x + obj.width <= 40) && (obj.x + obj.width >= -(obj.gap - 50))) {
            console.log(obj.width, obj.gap, obj.x)
            crash = true
        }
        return crash
    }
    this.gameover = function(obj, n) {
        crash = false
        var h = n

        if (obj.height == this.y && (obj.x + obj.width <= 40) && (obj.x + obj.width >= -(obj.gap - 50))) {
            if (upper[h + 1].extras != 1 && obj.extras != 1) {
                crash = true
            }
        }
        return crash
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
var btn = document.getElementById("btn")

function playagain() {
    myGameArea.stop()
    distance = -80
    myGameArea.clear()
    upper = [];
    lower = [];
    interval = 0
    interval1 = 0
    onclks_count = 0
    space.width = 750
    space.height = 450
    w_upper = 0
    j_upper = 2
    w_lower = 0
    j_lower = 1
    total_interval = 752
    total_interval1 = 751
    confuser = 0
    startGame()
}