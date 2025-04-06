//Valores de dificuldade
let diffValue = 0;
let newValue = 10;

//Pontuação
let score = 0;

//Executa ao inicializar página
window.onload = chooseDiff(newValue);

//Escolhe e ajusta a dificuldade
function chooseDiff(newValue) {
    diffValue = diffValue + newValue;
    startGame(diffValue);
}

//Cria um valor aleatório
function createValue(diffValue) {
    return Math.floor(Math.random() * diffValue) + 1;
}

//Inicializa o jogo
function startGame(diffValue) {
    
    let num1 = createValue(diffValue);
    let num2 = createValue(diffValue);
    
    let resultado = 0;
    let opcaoCerta = false;
    
    //Define quais operadores estarão disponíveis
    let op = 1;
    
    if(diffValue >= 300) {
        op = 4;
    } else if(diffValue >= 200) {
        op = 3;
    } else if(diffValue >= 100) {
        op = 2;
    }

    let operacao = Math.floor(Math.random() * op) + 1;

    console.log(operacao)

    let operator = document.getElementById("operacao")

    switch (operacao) {
        case 1:
            operator.innerHTML = "+"
            resultado = num1 + num2
            break
        case 2:
            operator.innerHTML = "-"
            resultado = num1 - num2
            break
        case 3:
            operator.innerHTML = "*"
            resultado = num1 * num2
            break
        case 4:
            operator.innerHTML = "/"
            resultado = (num1/num2).toFixed(2)
            break
    }
    
    document.getElementById("primeiroNum").innerHTML = num1
    document.getElementById("segundoNum").innerHTML = num2

    let opcao1 = document.getElementById("opcao1")
    let opcao2 = document.getElementById("opcao2")
    let opcao3 = document.getElementById("opcao3")

    opcao1.innerHTML = createValue(diffValue);
    opcao2.innerHTML = createValue(diffValue);
    opcao3.innerHTML = createValue(diffValue);

    let numOpcao = Math.floor(Math.random() * 3) + 1

    switch (numOpcao) {
        case 1:
            opcao1.innerHTML = resultado
            break
        case 2:
            opcao2.innerHTML = resultado
            break
        case 3:
            opcao3.innerHTML = resultado
            break
    }
}

opcao1.addEventListener("click", function() {
    let condicao = document.getElementById("condicao")

    if (parseInt(opcao1.innerText) === resultado) {
        condicao.innerText = "Correto! Você acertou!";
    } else {
        condicao.innerText = "Errado! Tente novamente.";
    }
})

function fazerChute(resultado,opcao) {
    if (opcao.innerHTML = resultado) {
        document.getElementById("resultado").innerHTML = ("resposta certa!")
    } else {
        document.getElementById("resultado").innerHTML = ("resposta errada!")
    }
}

/* function moveSquare() {
    let a = Math.random() * 1000
    let b = Math.random() * 1000
    let c = Math.random() * window.innerHeight
    let d = Math.random() * window.innerHeight

    let square = document.getElementById("square")
    square.style.position = "absolute"
    square.style.left = a + 'px'
    square.style.right = b + 'px'
    square.style.top = c + 'px'
    square.style.bottom = c + 'px'

    let x = window.innerHeight

    square.innerHTML = x
}*/
