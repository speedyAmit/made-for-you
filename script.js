// Welcome button
function openWebsite() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("main-content").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Fun facts
const funFacts = [
    "You have a special way of making people smile. 🌷",
    "You deserve all the happiness in the world. ✨",
    "You are more awesome than you probably realize. 💗",
    "Some people make ordinary days feel special. You are one of them. 🌸",
    "Never forget how special you are. 🦋"
];

function showFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);

    document.getElementById("fun-text").textContent =
        funFacts[randomIndex];
}


// Secret letter
function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
    } else {
        letter.style.display = "block";

        letter.textContent =
            "Dear Pushon, 🌷 This little website was made especially for you. It may be small, but every little part of it was made with care. Keep smiling and always stay the amazing person you are. 💗";
    }
}