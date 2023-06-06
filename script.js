const buttonConverter = document.getElementById("btn");

function convertValues() {
    const inputTypedValue = document.getElementById("enteredValue").value //input valor
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
   const currencyValueConvert = document.querySelector(".currency-value") //valor convertido
    

const valorDolarDia = 5.2;
const resultadoDolar = inputTypedValue / valorDolarDia;

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{

    style:"currency",
    currency:"BRL"

}).format(inputTypedValue)

currencyValueConvert.innerHTML = esultadoDolar;




}

buttonConverter.addEventListener("click",convertValues)

/*
 const dolarAmericano = document.getElementById("optionDolar").value 
    const moedaEuro = document.getElementById("optionEuro").value
*/