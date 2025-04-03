
function startGame() {
    window.location.href = "game.html";
}

function leaveGame() {
    window.location.href = "index.html";
}

const btnInst = document.getElementById("btnInstructions");
const btnCred = document.getElementById("btnCredits");
const closeInst = document.getElementById("closeInst");
const closeCred = document.getElementById("closeCred");

const openInst = document.getElementById("modalInst");
const openCred = document.getElementById("modalCred");

btnInst.addEventListener('click', () => {
   openInst.classList.add('open');
});

btnCred.addEventListener('click', () => {
    openCred.classList.add('open');
});

closeInst.addEventListener('click', () => {
    openInst.classList.remove('open');
});

closeCred.addEventListener('click', () => {
    openCred.classList.remove('open');
});