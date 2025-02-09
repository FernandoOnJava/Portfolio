const typedElement = document.getElementById("typed");

// Get longest phrase width before typing starts
function getMaxTextWidth(phrases) {
    let maxWidth = 0;
    let tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.position = "absolute";
    tempSpan.style.whiteSpace = "nowrap";
    document.body.appendChild(tempSpan);

    phrases.forEach(phrase => {
        tempSpan.innerHTML = phrase;
        maxWidth = Math.max(maxWidth, tempSpan.offsetWidth);
    });

    document.body.removeChild(tempSpan);
    return maxWidth + "px";
}

// Define phrases
const phrases = [
    "Hello there!",
    "Welcome to my website!",
    "Enjoy your stay!"
];

// Set the fixed width dynamically
typedElement.style.minWidth = getMaxTextWidth(phrases);

// Initialize Typed.js
var typed = new Typed("#typed", {
    strings: phrases,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true
});
