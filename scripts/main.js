//Valores de dificuldade
let diffValue = 0;
let newValue = parseInt(sessionStorage.getItem('newValue'));
let resultado;

//Arrays para guardar opções
var qtdOpcoes = 3;
let oldQtd;
var arr = [], opcoes = [];

//Verificador booleano para evitar criação desnecessária de EventListener
let verify = false;

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
        qtdOpcoes = 16;
    } else if(diffValue >= 200) {
        op = 3;
        qtdOpcoes = 12;
    } else if(diffValue >= 100) {
        op = 2;
        qtdOpcoes = 6
    }

    let operacao = Math.floor(Math.random() * op) + 1;

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
    
    //Insere os ambos os valores no elemento html
    document.getElementById("primeiroNum").innerHTML = num1
    document.getElementById("segundoNum").innerHTML = num2

    if(oldQtd < qtdOpcoes) {
        for(let i = 0; i < opcoes.length; i++) {
            document.getElementById("divOpcoes").removeChild(opcoes[i]);
        }
        arr = [];
        opcoes = [];
        verify = false;
    }
    
    oldQtd = qtdOpcoes;
        
    //Verifica se a função já foi executada anteriormente
    if(!verify) {
        for(let i = 0; i < qtdOpcoes; i++) {
            opcoes[i] = document.createElement('div');
            opcoes[i].setAttribute("id", "opcao" + i);
            document.getElementById("divOpcoes").appendChild(opcoes[i]);
        }

        arr.push(...opcoes);

        checkValue(arr);
        verify = true;
    }

    //Escolhe uma opção aleatória e verifica se não haverá repetição de valores
    escolheOpcao(arr, resultado, diffValue);

}

//Cria valores aleatórios para cada opção e adiciona uma opção para resposta
function escolheOpcao(arr, resultado, diffValue) {
    
    let num1, num2, operacao, valor;

    for(let i = 0; i < arr.length; i++) {
        num1 = createValue(diffValue);
        num2 = createValue(diffValue);

        let op = 1;
        if(diffValue >= 300) {
            op = 4;
        } else if(diffValue >= 200) {
            op = 3;
        } else if(diffValue >= 100) {
            op = 2;
        }

        operacao = Math.floor(Math.random() * op) + 1;

        switch (operacao) {
            case 1:
                valor = num1 + num2
                break
            case 2:
                valor = num1 - num2
                break
            case 3:
                valor = num1 * num2
                break
            case 4:
                valor = (num1/num2).toFixed(2)
                break
        }
        
        arr[i].innerHTML = valor;
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