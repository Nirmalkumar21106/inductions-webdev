var first = document.querySelectorAll(".inside")
var inner = document.querySelectorAll(".middle")
var parent = document.querySelector(".outer")
var i, points
var totalmoves = 0
var seconds = 0
var minutes = 0,
    stop = 0
var modal = document.getElementById("mymodal")
var btn = document.getElementById("playagain")
var middle9 = document.querySelectorAll(".noin")
var resetbtn = document.getElementById("reset")


var colours = ["red", "red", "red", "red", "blue", "blue", "blue", "blue", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "brown", "brown", "brown", "brown", "violet", "violet", "violet", "violet"]
var colours2 = ["red", "red", "red", "red", "blue", "blue", "blue", "blue", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "brown", "brown", "brown", "brown", "violet", "violet", "violet", "violet"]

inner.forEach(function(item) {
    i = Math.floor(Math.random() * colours.length)
    item.style.background = colours[i]
    colours.splice(i, 1)
})
first.forEach(function(item) {
    i = Math.floor(Math.random() * colours2.length)
    item.style.background = colours2[i]
    colours.splice(i, 1)
})

inner.forEach(function(item) {

    var nextelement = item.nextElementSibling;
    var previouselement = item.previousElementSibling

    item.onclick = hello
    var j = Array.prototype.indexOf.call(parent.children, item)

    function hello() {
        if (nextelement != null && nextelement.style.backgroundColor == '' && j % 5 != 4) {
            nextelement.style.backgroundColor = item.style.backgroundColor
            item.style.backgroundColor = ''
            totalmoves = totalmoves + 1
        }
        if (previouselement != null && previouselement.style.backgroundColor == '' && j % 5 != 0) {
            previouselement.style.backgroundColor = item.style.backgroundColor
            item.style.backgroundColor = ''
            totalmoves = totalmoves + 1
        }

        if (inner[j - 5] != null && inner[j - 5].style.backgroundColor == '') {
            inner[j - 5].style.backgroundColor = inner[j].style.backgroundColor
            inner[j].style.backgroundColor = ''
            totalmoves = totalmoves + 1
        }
        if (inner[j + 5] != null && inner[j + 5].style.backgroundColor == '') {
            inner[j + 5].style.backgroundColor = inner[j].style.backgroundColor
            inner[j].style.backgroundColor = ''
            totalmoves = totalmoves + 1
        }
        if (totalmoves == 1) {
            interval()
        }
        var count = 0;
        for (var k = 0; k < 9; k++) {
            if (middle9[k].style.backgroundColor == first[k].style.backgroundColor) {
                count = count + 1

            }
        }
        if (count == 9) {
            pointcalculater()
            document.getElementById("points").innerHTML = points
            document.getElementById("mdis").innerHTML = minutes
            document.getElementById("sdis").innerHTML = seconds
            clearInterval(stop)
            modal.style.display = "block"
        }

    }

})

function pointcalculater() {
    if (totalmoves <= 60) {
        points = 100
    } else if (totalmoves > 150) {
        points = 15
    } else {
        points = 100 - Math.floor((totalmoves - 60) * 85 / 90)
    }
}
btn.onclick = function() {
    location.reload()
}
resetbtn.onclick = function() {
    location.reload()
}

function interval() {
    stop = setInterval(() => {
        seconds += 1
        if (seconds == 60) {
            seconds = 0
            minutes += 1
        }
        minutes += Math.floor(1 / 60)
        document.getElementById("seconds").innerHTML = seconds
        document.getElementById("minutes").innerHTML = minutes
    }, 1000)
}