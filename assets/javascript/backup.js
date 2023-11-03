let valorInputArmazenado = {valor:''}

let taxasSumup = {
  debito:1.99, 
  creditoAvista:3.10, 
  Parcelado:12.35

}


let taxasVerdinha = {
  debito:1.69, 
  creditoAvista:3.49, 
  Parcelado:17.99
}

let taxasAzulzinha = {debito:1.99, creditoAvista:4.99, Parcelado:21}
let taxasAmarelinha = {debito:1.99, creditoAvista:4.99, Parcelado:21}
let taxasVermelhinha = {debito:1.09, creditoAvista:3.82, Parcelado:15}


let taxasPrincipais = { debito: 1.25, creditoAvista: 3.10, parcelado: 12 };
let valoresPri = []
let valoresCon = []
let nomedasConcorrentes = ["Verdinha","Amarelinha", "Vermelhinha", "Azulzinha"]
let contador = 0





const botaoPrincipal = document.querySelector(".cabecalho-principal__formulario-button")


function formatarValorDigitado(valor) {
  const valorDigitadoOriginal = valor.value
  const formatador = valorDigitadoOriginal.replace(/\D/g,"")
  valorInputArmazenado.valor = parseFloat(formatador)
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


// função principal de calculo de taxas (assumir)
function CalcularTaxas(valorDigitado,taxasPrincipais, taxasConcorrentes) {
  this.valorDigitado = valorDigitado;
  this.taxasPrincipais = taxasPrincipais;
  this.taxasConcorrentes = taxasConcorrentes;
  this.AssumirTaxasPrincipais = function () {

    for (let key in taxasPrincipais) {
      const propDoObjeto = taxasPrincipais.hasOwnProperty(key)
      if (propDoObjeto) {
        
        const resultadoPrincipal = valorDigitado - taxasPrincipais[key];
        valoresPri.push(resultadoPrincipal)
        
      }
    }
  };

  this.assumirTaxasConcorrente = function (){
    for (let key in taxasConcorrentes) {

      const propDoObjeto2 = taxasConcorrentes.hasOwnProperty(key)
      if (propDoObjeto2) {
        
        const resultadoConcorrente = valorDigitado * taxasConcorrentes[key];
      
        valoresCon.push(resultadoConcorrente)
        console.log(valoresCon)
        
      }
    }
  };


}


const BtnmaquinetaAtual = document.querySelector(".BtnmaquinetaAtual");




BtnmaquinetaAtual.addEventListener("click", (botao) => {
  const BtnClicado = botao.target.parentNode.querySelector(".nomedaconcorrente");
    const conteudoTexto = 
    BtnClicado.textContent = `${nomedasConcorrentes[contador]}`;
    contador++
    contadorMinimo = contador > 3
      if(contadorMinimo) contador = 0;
      verificarMaquinetaAtual()
      
});


function verificarMaquinetaAtual(){
  const nomedaconcorrente = document.querySelector(".nomedaconcorrente").textContent

  const azulzinha = nomedaconcorrente === nomedasConcorrentes[0]
  const amarelinha = nomedaconcorrente === nomedasConcorrentes[1]
  const verdinha = nomedaconcorrente === nomedasConcorrentes[2]
  const vermelhinha = nomedaconcorrente === nomedasConcorrentes[3]

  if(verdinha){
    
    let taxasPrincipais = taxasSumup;
    let taxasConcorrentes = taxasVerdinha
    let valorDigitado = valorInputArmazenado.valor
    const calcular = new CalcularTaxas(valorDigitado,taxasPrincipais,taxasConcorrentes)
    calcular.AssumirTaxasPrincipais()
    calcular.assumirTaxasConcorrente()
    aplicarTaxas()
}else if(amarelinha){
    
  let taxasPrincipais = taxasSumup;
  let taxasConcorrentes = taxasAmarelinha
  let valorDigitado = valorInputArmazenado.valor
  const calcular = new CalcularTaxas(valorDigitado,taxasPrincipais,taxasConcorrentes)
  calcular.AssumirTaxasPrincipais()
  calcular.assumirTaxasConcorrente()
  aplicarTaxas()
}
else if(vermelhinha){
    
  let taxasPrincipais = taxasSumup;
  let taxasConcorrentes = taxasAmarelinha
  let valorDigitado = valorInputArmazenado.valor
  const calcular = new CalcularTaxas(valorDigitado,taxasPrincipais,taxasConcorrentes)
  calcular.AssumirTaxasPrincipais()
  calcular.assumirTaxasConcorrente()
  aplicarTaxas()
}
else if(azulzinha){
    
  let taxasPrincipais = taxasSumup;
  let taxasConcorrentes = taxasAzulzinha
  let valorDigitado = valorInputArmazenado.valor
  const calcular = new CalcularTaxas(valorDigitado,taxasPrincipais,taxasConcorrentes)
  calcular.AssumirTaxasPrincipais()
  calcular.assumirTaxasConcorrente()
  aplicarTaxas()
}






}



let a = -1; 
let b = -1;

function aplicarTaxas(resultadoPrincipal,resultadoConcorrente){
  const valorConcorrente = document.querySelectorAll(".valorConcorrente")
  valorConcorrente.forEach((elemento)=>{
    a++
    elemento.innerHTML = `${moedaBrasileira(valoresPri[a])}`
    
  })

  const valorSumup = document.querySelectorAll(".valorSumup")

  valorSumup.forEach((sumup)=>{
    b++
    sumup.innerHTML = `${moedaBrasileira(valoresCon[b])}`

  })

}
 
  
botaoPrincipal.addEventListener("click", aplicarTaxas => {});
