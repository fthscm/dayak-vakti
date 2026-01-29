console.log("JS başladı");

const character = document.getElementById("character");
const canText = document.getElementById("can");
const message = document.getElementById("message");
const weapons = document.querySelectorAll(".weapon");
const hitWeapon = document.getElementById("hitWeapon");

let can = 10;
let seciliSilah = "glove";

// silah seçme
weapons.forEach(weapon => {
    weapon.addEventListener("click", () => {
        weapons.forEach(w => w.classList.remove("selected"));
        weapon.classList.add("selected");
        seciliSilah = weapon.dataset.weapon;
    });
});

// karaktere vurma
character.addEventListener("click", (e) => {
    if (can <= 0) return;

    can--;
    canText.innerText = "❤️ " + can;

    // titreme
    character.classList.add("shake");
    setTimeout(() => {
        character.classList.remove("shake");
    }, 150);

    // yüz değişimi
    character.src = "character_hit.png";
    setTimeout(() => {
        character.src = "character.png";
    }, 200);

    // silahı göster
    hitWeapon.src = seciliSilah + ".png";
    hitWeapon.style.left = e.pageX + "px";
    hitWeapon.style.top = e.pageY + "px";
    hitWeapon.style.display = "block";

    setTimeout(() => {
        hitWeapon.style.display = "none";
    }, 150);

    // can bitti mesajı
    if (can === 0) {
        message.innerText = "Umarım beni dövmek seni rahatlatmıştır ömrüm ❤️";
    }
});
