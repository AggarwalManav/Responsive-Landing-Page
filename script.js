let isClicked = true;
function myfunc() {
    if (isClicked) {
        document.getElementById("dropdown").style.display = "flex";
        isClicked = false;
    } else {
        document.getElementById("dropdown").style.display = "none";
        isClicked = true;
    }

}

let isClicked1 = true;
function myfunc1() {
    if (isClicked1) {
        document.getElementById("drop").style.display = "flex";
        isClicked1 = false;
    } else {
        document.getElementById("drop").style.display = "none";
        isClicked1 = true;
    }

}
