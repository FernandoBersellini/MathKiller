//Valores de dificuldade
let diffValue = 0;
let newValue = 10;
let resultado;

//Verificador booleano para evitar criação desnecessária de EventListener
var verify = false;

//Pontuação
let score = 0;
const pontuacao = document.getElementById("pontuacao")
pontuacao.textContent = "Pontuação: " + score;

const resetar = document.getElementById("btnRestart")

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

function desabilitarBotao(x,y,z) {
    
}

//Inicializa o jogo
function startGame(diffValue) {
    
    let num1 = createValue(diffValue);
    let num2 = createValue(diffValue);
    
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

    console.log("Operador escolhido para calculo: " + operacao)

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
    let opcao4 = document.getElementById("opcao4")
    let opcao5 = document.getElementById("opcao5")
    let opcao6 = document.getElementById("opcao6")

    const arr = [opcao1, opcao2, opcao3, opcao4, opcao5, opcao6];

    //Escolhe uma opção aleatória e verifica se não haverá repetição de valores
    escolheOpcao(arr, resultado);

    //Verifica se a função já foi executada anteriormente
    if(!verify) {
        checkValue(arr);
        verify = true;
    }
}

function escolheOpcao(arr, resultado) {
    
    for(let i = 0; i < arr.length; i++) {
        arr[i].innerHTML = createValue(diffValue);
    }

    let numOpcao = Math.floor(Math.random() * arr.length);

    switch (arr) {
        case arr:
            arr[numOpcao].innerHTML = resultado;
            break;
    }
}

//Cria EventListener para cada opção e verifica se a resposta está correta
function checkValue(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {

        let condicao = document.getElementById("condicao");

        arr[i].addEventListener('click', function() {

            if (parseInt(arr[i].innerText) === resultado || parseFloat(arr[i].innerText).toFixed(2) === resultado) {
                condicao.innerText = "Correto! Você acertou!";
                score++;
                pontuacao.textContent = "Pontuação: " + score;
                resetar.style.visibility = "visible";
                chooseDiff(newValue)
            } else {
                condicao.innerText = "Errado! Tente novamente.";
                score--;
                pontuacao.textContent = "Pontuação: " + score;
            }
        });
    }
}