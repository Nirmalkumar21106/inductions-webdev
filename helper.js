var first = document.getElementsByClassName("inside");
console.log(first);
var inner = document.querySelectorAll(".middle")
console.log(inner)
var parent = document.querySelector(".outer")
var i
var colours = ["red", "red", "red", "red", "blue", "blue", "blue", "blue", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "brown", "brown", "brown", "brown", "orange", "orange", "orange", "orange"]
var colours2 = ["red", "red", "red", "red", "blue", "blue", "blue", "blue", "green", "green", "green", "green", "yellow", "yellow", "yellow", "yellow", "brown", "brown", "brown", "brown", "orange", "orange", "orange", "orange"]

inner.forEach(function(item) {
    i = Math.floor(Math.random() * colours.length)
    item.style.background = colours[i]
    colours.splice(i, 1)
})
Array.from(first).forEach(function(item) {
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
        }
        if (previouselement != null && previouselement.style.backgroundColor == '' && j % 5 != 0) {
            previouselement.style.backgroundColor = item.style.backgroundColor
            item.style.backgroundColor = ''
        }
        if (inner[j - 5] != null && inner[j - 5].style.backgroundColor == '') {
            inner[j - 5].style.backgroundColor = inner[j].style.backgroundColor
            inner[j].style.backgroundColor = ''
        }
        if (inner[j + 5] != null && inner[j + 5].style.backgroundColor == '') {
            inner[j + 5].style.backgroundColor = inner[j].style.backgroundColor
            inner[j].style.backgroundColor = ''
        }
    }
})