function downpress() {
    document.getElementById("aboutus").scrollIntoView(true);
    return 0;
}

function uppress() {
    document.getElementsByClassName("navbar")[0].scrollIntoView(true);
    return 0;
}

console.log(document.getElementById("logopage").scrollTop);