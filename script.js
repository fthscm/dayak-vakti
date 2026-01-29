let can = 20;

const character = document.getElementById("character");
const canText = document.getElementById("can");
const bubble = document.getElementById("bubble");
const weapons = document.querySelectorAll(".weapon");

const normalImg = "character.png";
const hitImg = "character_hit.png";

const messages = {
    17: "elini korkak alıştırma canım",
    13: "vurduğun yerde gül bitiyor",
    9: "salak de",
    6: "mal de",
    3: "geri zekalı de",
    1: "ellerine sağlık sarışın bombam"
};

/* silah seçimi */
weapons.forEach(w => {
    w.addEventListener("click", () => {
        document.body.className = "";
        document.body.classList.add(w.dataset.weapon);
    });
});

/* vurma */
character.addEventListener("click", () => {
    if (can <= 0) return;

    can--;
    canText.innerText = `❤️ ${can}`;

    character.src = hitImg;
    character.classList.add("hit");

    setTimeout(() => {
        character.src = normalImg;
        character.classList.remove("hit");
    }, 150);

    if (messages[can]) {
        bubble.innerText = messages[can];
        bubble.style.display = "block";
    }
});
