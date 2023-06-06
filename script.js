const buttonConverter = document.getElementById("convertButton");

function convertValues() {
    const inputTypedValue = document.getElementById("enteredValue").value //input valor
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em real
   const currencyValueConvert = document.querySelector(".currency-value") //valor convertido
    

const dollarValueOfTheDay = 5.2;
const result = inputTypedValue / dollarValueOfTheDay;

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{

    style:"currency",
    currency:"BRL"

}).format(inputTypedValue);

currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
}).format(result);







}

buttonConverter.addEventListener("click",convertValues)

/*
 const dolarAmericano = document.getElementById("optionDolar").value 
    const moedaEuro = document.getElementById("optionEuro").value
*/