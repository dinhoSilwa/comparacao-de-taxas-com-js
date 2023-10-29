botaoCalculo.addEventListener("click",()=>{

            

  for(let i = 0; i < taxasumup.length; i++){

    const resultadoSumup = valoresDigitadosNoInput.valor - 
    (valoresDigitadosNoInput.valor * (valoresTaxaSumup[i]/100))
    const moedaBrasileiraconcorrente = resultadoSumup.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits:2 })
    taxasumup[i].innerHTML = `R$ ${moedaBrasileiraconcorrente}`
    valoresRecebidosSumup.push(resultadoSumup)
    
  }

  for(let i = 0; i < valoresConcorrentes.length; i++){

    const resultadoConcorrente = valoresDigitadosNoInput.valor - 
    (valoresDigitadosNoInput.valor * (valoresConcorrentes[i]/100))

    const moedaBrasileiraSumup = resultadoConcorrente.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    taxaconcorrentes[i].innerHTML = `R$ \n ${moedaBrasileiraSumup}`

    valoresRecebidosConcorrentes.push(resultadoConcorrente)

    const resultadoDiferenca = valoresRecebidosSumup[i] - valoresRecebidosConcorrentes[i]
    const resultadoDiferencaMoeda = resultadoDiferenca.toLocaleString('pt-BR', { minimumFractionDigits:2 , maximumFractionDigits:2 })
    
    diferenca[i].innerHTML = `R$ ${resultadoDiferencaMoeda}`

    console.log(valoresDigitadosNoInput.valor)

  }

  

})
