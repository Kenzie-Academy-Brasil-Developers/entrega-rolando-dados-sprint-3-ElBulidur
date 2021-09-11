// MONTAGEM DO CABEÇARIO E A DIV DE RESPOSTAS
let divCabecalho = document.createElement("div")
divCabecalho.classList.add("cabecalho")

let divDados = document.createElement("div")
divDados.id = "dados"

let btnRolarDados = document.createElement("button")
btnRolarDados.id = "rolarDados"
btnRolarDados.innerHTML = "Rolar Dados 1000 vezes"

  let btnZerarResultados = document.createElement("button")
  btnZerarResultados.id = "zerarResultados"
  btnZerarResultados.innerHTML = "Zerar todos os resultados"
  btnZerarResultados.disabled = true;
  
  divCabecalho.appendChild(btnZerarResultados)

divCabecalho.appendChild(divDados)
divCabecalho.appendChild(btnRolarDados)

let divRespostas = document.createElement("div")
divRespostas.classList.add("respostas")


let main = document.querySelector("main")
main.appendChild(divCabecalho)
main.appendChild(divRespostas)

let ul = document.createElement("ul")

let divResposta = document.querySelector("div.respostas")
divResposta.appendChild(ul)

gerarDados()

//funcao gerar dados
function gerarDados(){
  for(let x = 1; x <= 2; x++){  
    let dado = document.createElement("div")
    dado.classList.add("styleDado", "dado"+x)

    for(let i = 1; i <= 3; i++){
      let list = document.createElement("div")
      list.classList.add("dado__list")
      list.innerHTML = "<div class='cicle dado"+x+"_cicle'></div><div class='cicle dado"+x+"_cicle'></div><div class='cicle dado"+x+"_cicle'></div>"
      dado.appendChild(list)
    }
    let divDados = document.querySelector("div#dados")
    divDados.appendChild(dado)
  } 
  return ""
}

//Função gerar números dos dados
function numbersDados(numberDado1, numberDado2){
  
  let dado1_cicle = document.querySelectorAll(".dado1_cicle")
  let dado2_cicle = document.querySelectorAll(".dado2_cicle")

  if(numberDado1 == 1){
      dado1_cicle[4].style.visibility = "visible"
  }else if(numberDado1 == 2){
      dado1_cicle[3].style.visibility = "visible"
      dado1_cicle[5].style.visibility = "visible"
  }else if(numberDado1 == 3){
      dado1_cicle[2].style.visibility = "visible"
      dado1_cicle[4].style.visibility = "visible"
      dado1_cicle[6].style.visibility = "visible"
  }else if(numberDado1 == 4){
      dado1_cicle[0].style.visibility = "visible"
      dado1_cicle[2].style.visibility = "visible"
      dado1_cicle[6].style.visibility = "visible"
      dado1_cicle[8].style.visibility = "visible"
  }else if(numberDado1 == 5){
      dado1_cicle[0].style.visibility = "visible"
      dado1_cicle[2].style.visibility = "visible"
      dado1_cicle[4].style.visibility = "visible"
      dado1_cicle[6].style.visibility = "visible"
      dado1_cicle[8].style.visibility = "visible"
  }else{
      dado1_cicle[0].style.visibility = "visible"
      dado1_cicle[2].style.visibility = "visible"
      dado1_cicle[3].style.visibility = "visible"
      dado1_cicle[5].style.visibility = "visible"
      dado1_cicle[6].style.visibility = "visible"
      dado1_cicle[8].style.visibility = "visible"
  }

  if(numberDado2 == 1){
      dado2_cicle[4].style.visibility = "visible"
  }else if(numberDado2 == 2){
      dado2_cicle[3].style.visibility = "visible"
      dado2_cicle[5].style.visibility = "visible"
  }else if(numberDado2 == 3){
      dado2_cicle[2].style.visibility = "visible"
      dado2_cicle[4].style.visibility = "visible"
      dado2_cicle[6].style.visibility = "visible"
  }else if(numberDado2 == 4){
      dado2_cicle[0].style.visibility = "visible"
      dado2_cicle[2].style.visibility = "visible"
      dado2_cicle[6].style.visibility = "visible"
      dado2_cicle[8].style.visibility = "visible"
  }else if(numberDado2 == 5){
      dado2_cicle[0].style.visibility = "visible"
      dado2_cicle[2].style.visibility = "visible"
      dado2_cicle[4].style.visibility = "visible"
      dado2_cicle[6].style.visibility = "visible"
      dado2_cicle[8].style.visibility = "visible"
  }else{
      dado2_cicle[0].style.visibility = "visible"
      dado2_cicle[2].style.visibility = "visible"
      dado2_cicle[3].style.visibility = "visible"
      dado2_cicle[5].style.visibility = "visible"
      dado2_cicle[6].style.visibility = "visible"
      dado2_cicle[8].style.visibility = "visible"
  }
  return ""
}

//Função resetar o número dos dados
function resetDados(){
    
  let dado1_cicle = document.querySelectorAll(".dado1_cicle")
  let dado2_cicle = document.querySelectorAll(".dado2_cicle")

  for(let i=0;i<9;i++){
    dado1_cicle[i].style.visibility = "hidden"
    dado2_cicle[i].style.visibility = "hidden"
  }
}

//Função criar as barras de de respostas
function barra(number,qtdFreq){
  
  let h3 = document.createElement("h3")
  h3.innerHTML = number+" &#128073;&nbsp;&nbsp;"
  let divRolagens = document.createElement("div")
  divRolagens.id = "rolagens"
  let divIndice = document.createElement("div")
  divIndice.classList.add("indice", "I"+number)
  divIndice.innerHTML = qtdFreq+"x"
  divIndice.style.width = (qtdFreq/2)+"%"

  divRolagens.appendChild(divIndice)


  let li = document.createElement("li")
  li.id = "liResposta"
  ul.appendChild(li)
  
  li.appendChild(h3)
  li.appendChild(divRolagens)
  
}

//Botão para rolar os dados e geras as barras
let btnRolardados = document.getElementById("rolarDados")
btnRolardados.addEventListener("click", function() {

  btnRolarDados.disabled = true
  btnZerarResultados.disabled = false;
  let arrayFreq = [[2,3,4,5,6,7,8,9,10,11,12],[0,0,0,0,0,0,0,0,0,0,0]]

  for(let x=0;x<1000;x++){
    resetDados()
    let numberRandon1 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    let numberRandon2 = Math.floor(Math.random() * (6 - 1 + 1) + 1)
      numbersDados(numberRandon1,numberRandon2)
    let sumDados = (numberRandon1) + (numberRandon2)
    
    for(let i=0;i<=10;i++){
        if(sumDados == arrayFreq[0][i]){
        arrayFreq[1][i]++;
      }
    }
    
  }
  for(let i=0;i<=10;i++){
    barra(arrayFreq[0][i],arrayFreq[1][i])
  }
})

// Botão remover as barras de respostas
document.getElementById("zerarResultados").addEventListener("click", function () {

  btnRolarDados.disabled = false
  btnZerarResultados.disabled = true;
  
  for(let i=1;i<=11;i++){
    let li = document.getElementById("liResposta")
    li.remove()
  }
})


