const buttonConverter = document.getElementById("convertButton");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputTypedValue = document.getElementById("enteredValue").value; //input valor
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); //valor
  // em real
  const currencyValueConvert = document.querySelector(".currency-value"); //valor convertido
  const dolarToday = 5.2;
  const euroToday = 6.2;

  //Se o option for igual a dolar americano cai aqui
  if (currencySelect.value == "dolar") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputTypedValue / dolarToday);
    //Se o option for igual a euro  cai aqui
  }
  if (currencySelect.value == "euro") {
    currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputTypedValue / euroToday);
  }
  //Aqui esta sendo formatado o valor digitado no campo valor e colocado dentro do campo de valor Real
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputTypedValue);
} //fim function

function changeCurrency(){
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.getElementById("currency-img");

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./assets/img/euro.png"

    }if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar";
        currencyImg.src = "./assets/img/estados-unidos (1) 1.png"

    }

    convertValues();


}

buttonConverter.addEventListener("click", convertValues);
currencySelect.addEventListener("change", changeCurrency);
