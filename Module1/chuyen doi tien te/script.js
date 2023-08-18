function convertCurrency() {
    var vndAmount = parseFloat(document.getElementById("vndAmount").value);
    var usdExchangeRate = 0.000043; // Tỷ giá VNĐ sang USD
    var usdAmount = vndAmount * usdExchangeRate;

    var resultElement = document.getElementById("result");
    resultElement.textContent = vndAmount + " VNĐ = " + usdAmount.toFixed(2) + " USD";
}