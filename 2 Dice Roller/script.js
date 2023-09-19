let atilanZar = document.title;
const solZar = document.querySelectorAll(".sol-zar i");
const sagZar = document.querySelectorAll(".sag-zar i");
const tumI = document.querySelectorAll("i");
function temizle() {
    tumI.forEach(e => {
        if (!(e.classList.contains("disable"))) {
            e.classList.add("disable");
        }
    })
}
function zarat() {
    temizle();
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    if (x > 5) {
        x = x - 6;
    }
    if (y > 5) {
        y = y - 6;
    }
    // console.log(x)
    // console.log(solZar[x])
    // console.log(sagZar[y])
    solZar[x].classList.remove("disable");
    sagZar[y].classList.remove("disable");
    if (x == y) {
        alert(`tebrikler ${x + 1}:${y + 1} attiniz!`);
    }
    atilanZar = ` Atılan Zar:${x + 1}:${y + 1}`;
}