const BtnIconemaquinetaAtual = document.querySelectorAll(".BtnmaquinetaAtual") // icone de maquinetas
const botaoDeCalculoPrincipal = document.querySelector(".cabecalho-principal__formulario-button")
const taxasPrincipais = [1.2,3.10,12]

const concorrenteAtual = ["Amarelinha", "Verdinha", "Vermelhinha", "Azulzinha"]


// valor digitado no input que foi armazenado
const valorInput = {valor:0}

/// taxas das maquinetas c
const txAzulzinha = [1.99,4.98,17.28]
const txAmarelinha = [1.99,4.99,17.28]
const txVerdinha = [1.29,3.49,17.99]
const txVermelhinha = [1.09,3.82,15]



function formatarValorDigitado(valor) {
  const valorDigitadoOriginal = valor.value
  const formatador = valorDigitadoOriginal.replace(/\D/g,"")
 valorInput.valor = parseFloat(formatador)
  valor.value = moedaBrasileira(parseFloat(formatador/100))
 
  
 
  
}

const moedaBrasileira = value => { /// função que converte o valor digitado para moeda BRasileira
  let options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2, 
  };
  return value.toLocaleString('pt-BR', options);
}





botaoDeCalculoPrincipal.addEventListener("click",()=>{
  const nomeConcorrente = document.querySelector(".nomedaconcorrente")
  const iconeClicado = nomeConcorrente.parentNode.querySelector(".nomedaconcorrente")
  exibirCalculo(concorrenteAtual[3])

  
})


let indiceContador = 0;
let clique = []

    
function clickNoIcone(icone){


  const iconeClicado = icone.parentNode.querySelector(".nomedaconcorrente")
  const MaquinetaConcorrenteAtual = iconeClicado.textContent

  if(indiceContador > 3) indiceContador = 0

iconeClicado.innerHTML = `${concorrenteAtual[indiceContador]}`
exibirCalculo(concorrenteAtual[indiceContador])
  indiceContador++


  


}
    

 

function exibirCalculo(MaquinetaConcorrenteAtual){
 
  const amarelinha = MaquinetaConcorrenteAtual === concorrenteAtual[0]
  const verdinha = MaquinetaConcorrenteAtual === concorrenteAtual[1]
  const vermelhinha  = MaquinetaConcorrenteAtual === concorrenteAtual[2]
  const azulzinha =  MaquinetaConcorrenteAtual === concorrenteAtual[3]

  if(amarelinha){
    const calAmarelinha = new definirTaxas(valorInput,taxasPrincipais,txAmarelinha)
    calAmarelinha.Taxasprincipal()
    console.log("amarelo")
    
  }
  if(verdinha){
    const calVerdinha = new definirTaxas(valorInput,taxasPrincipais,txVerdinha)
    calVerdinha.Taxasprincipal()
    console.log("verde")
  }
  if(vermelhinha){
    const calVermelhinha =  new definirTaxas(valorInput,taxasPrincipais,txVermelhinha)
    calVermelhinha.Taxasprincipal()
    console.log("vermelho")
  }
  if(azulzinha){
    const calAzulzinha = new definirTaxas(valorInput,taxasPrincipais,txAzulzinha)
    calAzulzinha.Taxasprincipal()
    console.log("azul")
  }
}

function definirTaxas(valorInput,Principais,concorrente){

  this.valor = valorInput;
  this.Principais = Principais;
  this.concorrente = concorrente;
  this.Taxasprincipal = function(){
 
   for(let i = 0; i < concorrente.length; i++){
    const resultadoPrincipal = (valorInput.valor)/100 - parseFloat(concorrente[i])
    const concorrenteCalculado = new mostrarTaxas (resultadoPrincipal)
    concorrenteCalculado.mostrarValores()
   }

  }

}
