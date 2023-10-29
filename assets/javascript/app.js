/// variáveis para a função de formatação para moeda brasileira

const botaoCalculo = document.querySelector(".cabecalho-principal__formulario-button")
const input = document.querySelector(".cabecalho-principal__formulario-input")
const btnRepassarTaxas = document.querySelectorAll(".btnCalculo")


// variáveis para a manipulação e soma das taxas
const taxasumup = document.querySelectorAll(".valorSumup")
const taxaconcorrentes = document.querySelectorAll(".valorConcorrente")
const diferenca = document.querySelectorAll(".diferenca")
const tecladoVirtual = document.querySelectorAll(".teclado-digito")
const nomedaconcorrente = document.querySelectorAll(".nomedaconcorrente")


/// variáveis para a manipulação do menu principal 

const navegacao = document.querySelector(".navegacao-principal__lista")
const modalBLocos = [...document.querySelectorAll(".modal__bloco")]
const menuItems = ["Modalidades", "Taxas", "Gráficos"]
const modalMenu = document.querySelector(".modal__menu-lista")

const botaodeOk = document.querySelector(".modais__menu-confirmar")
let botaoClose = false;
let modalidadeClicada = ["assumir"]


// armazenar valor da taxa da concorrência
const valoresConcorrentes = [1.89, 4.99, 21.90]
const valoresTaxaSumup = [1.25, 3.10, 12.35]

let valoresRecebidosSumup = []
let valoresRecebidosConcorrentes = []


let valoresDigitadosNoInput = { valor: "" }


const formatarValorDigitado = (valorDigitadoNoInput) => {

  const valorOriginalDigitado = valorDigitadoNoInput.value
  const formatador = valorOriginalDigitado.replace(/\D/g, "")
  // variavel que retira valores não númericos
  const valorParaMoedaBR = (parseFloat(formatador) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  valoresDigitadosNoInput.valor = (parseFloat(formatador) / 100)
  valorDigitadoNoInput.value = `R$ ${valorParaMoedaBR}`

  console.log(formatador)




}

btnRepassarTaxas.forEach((botaoCalculoClicado) => {
  botaoCalculoClicado.addEventListener("click", (e) => {

    const modalidade = botaoCalculoClicado.getAttribute("data-modalidade")
      console.log(modalidade)






    if (modalidade === "AssTaxas") {
        AssumirTaxas()
          botaoCalculoClicado.parentNode.querySelector(".ass").classList.add("Btnselecionado")
          
            botaoCalculoClicado.parentNode.querySelector(".rep").classList.remove("Btnselecionado")
              const modalidade = document.querySelector(".mod").textContent = `Assumir`
              modalidadeClicada = []
              modalidadeClicada.push("assumir")
              console.log(modalidadeClicada)



    } else if (modalidade === "RepTaxas") {
      repassarTaxas()
          botaoCalculoClicado.parentNode.querySelector(".rep").classList.add("Btnselecionado")

             botaoCalculoClicado.parentNode.querySelector(".ass").classList.remove("Btnselecionado")
                    const modalidade = document.querySelector(".mod").textContent = `Repassar`
                    modalidadeClicada = []
                    modalidadeClicada.push("repassar")
                    console.log(modalidadeClicada)
    }

  })





})

botaoCalculo.addEventListener("click", (e) => {

  
  if(modalidadeClicada[0] === "" || modalidadeClicada[0] === "assumir"){

      AssumirTaxas()

  }else if(modalidadeClicada[0] === "repassar")

repassarTaxas()

})






navegacao.addEventListener("click", (elementoClicado) => {



  const textoItemClicado = elementoClicado.target.getAttribute("data-item")

  modalMenu.classList.remove("classeOculta")


  for (let i = 0; i < menuItems.length; i++) {

    if (textoItemClicado === menuItems[i]) {
      modalBLocos[i].classList.remove("classeOculta")
    } else {
      modalBLocos[i].classList.add("classeOculta")
    }
  }
})

botaodeOk.addEventListener("click", () => { botaoClose = true; modalMenu.classList.add("classeOculta") })




function AssumirTaxas() {

  for (let i = 0; i < taxasumup.length; i++) {

    const resultadoSumup = valoresDigitadosNoInput.valor -
      (valoresDigitadosNoInput.valor * (valoresTaxaSumup[i] / 100))
    const moedaBrasileiraconcorrente = resultadoSumup.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    taxasumup[i].innerHTML = `R$ ${moedaBrasileiraconcorrente}`
    valoresRecebidosSumup.push(resultadoSumup)

  }

  for (let i = 0; i < valoresConcorrentes.length; i++) {

    const resultadoConcorrente = valoresDigitadosNoInput.valor -
      (valoresDigitadosNoInput.valor * (valoresConcorrentes[i] / 100))

    const moedaBrasileiraSumup = resultadoConcorrente.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    taxaconcorrentes[i].innerHTML = `R$ \n ${moedaBrasileiraSumup}`

    valoresRecebidosConcorrentes.push(resultadoConcorrente)

    const resultadoDiferenca = valoresRecebidosSumup[i] - valoresRecebidosConcorrentes[i]
    const resultadoDiferencaMoeda = resultadoDiferenca.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    diferenca[i].innerHTML = `R$ ${resultadoDiferencaMoeda}`

    console.log(valoresDigitadosNoInput.valor)

  }


}



function repassarTaxas() {

  for (let i = 0; i < taxasumup.length; i++) {

    const resultadoSumup = valoresDigitadosNoInput.valor / (1 - (valoresTaxaSumup[i] / 100))


    // valoresDigitadosNoInput.valor - 
    // (valoresDigitadosNoInput.valor * (valoresTaxaSumup[i]/100))


    const moedaBrasileiraconcorrente = resultadoSumup.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    taxasumup[i].innerHTML = `R$ ${moedaBrasileiraconcorrente}`
    valoresRecebidosSumup.push(resultadoSumup)

  }

  for (let i = 0; i < valoresConcorrentes.length; i++) {

    const resultadoConcorrente = valoresDigitadosNoInput.valor / (1 - (valoresConcorrentes[i] / 100))

    // valoresDigitadosNoInput.valor - 
    // (valoresDigitadosNoInput.valor * (valoresConcorrentes[i]/100))

    const moedaBrasileiraSumup = resultadoConcorrente.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    taxaconcorrentes[i].innerHTML = `R$ \n ${moedaBrasileiraSumup}`

    valoresRecebidosConcorrentes.push(resultadoConcorrente)

    const resultadoDiferenca = valoresRecebidosConcorrentes[i] - valoresRecebidosSumup[i]
    const resultadoDiferencaMoeda = resultadoDiferenca.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

    diferenca[i].innerHTML = `R$ ${resultadoDiferencaMoeda}`

    

  }


}