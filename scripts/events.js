function startGame(value) {
    switch(value) {
        case 1:
            sessionStorage.setItem('newValue', 5);
            window.location.href = "game.html";
            break;
        case 2:
            sessionStorage.setItem('newValue', 10);
            window.location.href = "game.html";
            break;
        case 3:
            sessionStorage.setItem('newValue', 50);
            window.location.href = "game.html";
            break;
    }
}

function leaveGame() {
    window.location.href = "index.html";
}

try {
    const btnStart = document.getElementById("btnStart");
    const btnInst = document.getElementById("btnInstructions");
    const btnCred = document.getElementById("btnCredits");
    
    const closeStart = document.getElementById("closeStart");
    const closeInst = document.getElementById("closeInst");
    const closeCred = document.getElementById("closeCred");

    const openStart = document.getElementById("modalStart");
    const openInst = document.getElementById("modalInst");
    const openCred = document.getElementById("modalCred");

    btnStart.addEventListener('click', () => {
        openStart.classList.add('open');
    });

    btnInst.addEventListener('click', () => {
        openInst.classList.add('open');
    });

    btnCred.addEventListener('click', () => {
        openCred.classList.add('open');
    });

    closeStart.addEventListener('click', () => {
        openStart.classList.remove('open');
    });

    closeInst.addEventListener('click', () => {
        openInst.classList.remove('open');
    });

    closeCred.addEventListener('click', () => {
        openCred.classList.remove('open');
    });
} catch (error) {
    console.log("O jogo está sendo executado!");
}
