window.onload = game();

function game() {
    
    let num1 = Math.floor(Math.random() * 100) + 1
    let num2 = Math.floor(Math.random() * 100) + 1
    let resultado = 0
    let opcaoCerta = false
    
    let operacao = Math.floor(Math.random() * 4) + 1 

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

    opcao1.innerHTML = Math.floor(Math.random() * 100)
    opcao2.innerHTML = Math.floor(Math.random() * 100)
    opcao3.innerHTML = Math.floor(Math.random() * 100)

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
