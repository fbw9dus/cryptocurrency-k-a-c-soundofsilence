function ConvertIt(){
    let select1 = document.getElementById("select1")
    let select2 = document.getElementById("select2")
    let input1 = document.getElementById("myInput1")
    let input2 = document.getElementById("myInput2")
    let convert = document.getElementById("converet")    
    let url = `https://www.cryptonator.com/api/${select1.value}-${select2.value}`
    fetch(url)

}    




/** 
function convertIt(){
//      let url = `https://api.cryptonator.com/api/ticker/${select1.value}-${select2.value}`
      fetch(url)
          .then(data => data.json())
          .then(cryptoData => {
              cryptoEx = cryptoData
              console.log(cryptoEx)
          })
          .then(convert)
  }
  console.log(option1.value)
  getConvert()
  function convert() {
      var priceNum = cryptoEx.ticker.price
      priceNum = parseFloat(priceNum)
      var finalPrice = firstInput.value * priceNum
     secondInput.value = finalPrice
  }*/