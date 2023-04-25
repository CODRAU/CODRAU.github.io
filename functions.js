const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

function downpress() {
    document.getElementById("aboutus").scrollIntoView(true);
    return 0;
}

function uppress() {
    document.getElementsByClassName("navbar")[0].scrollIntoView(true);
    return 0;
}

