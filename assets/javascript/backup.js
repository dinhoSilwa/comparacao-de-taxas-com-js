

botaoCalculo.addEventListener("click",(e)=>{

 e.preventDefault

 valorConcorrente.forEach((valor)=>{
       
 for(let i = 0; i < valorConcorrente.length; i++){

   const resultadoConcorrente = valoresDigitadosNoInput.valor - (valoresDigitadosNoInput.valor * (taxasConcorrentes[i]/100))
   const FormataParaMoeda = resultadoConcorrente.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits:2 })
   valorConcorrente[i].innerHTML = `R$ ${FormataParaMoeda}`
   
  

 }

})

})