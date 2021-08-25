var CoinsValues = {
    SLPUSD: 0,
    BTCUSD: 0,
    BRLUSD: 0,
    ETHUSD: 0,
    LTCUSD: 0,
    USDUSD: 1,
}

fetch('http://localhost:5050/teste', {  
    method: 'GET', 
    headers: {Accept: "application/json", 'Content-Type': 'application/json'} })
    .then(response =>response.json())
    .then(response => {
        console.log(response)
        CoinsValues.SLPUSD = response.SLP.SLPUSD
        CoinsValues.BTCUSD = response.BTC.BTCUSD
        CoinsValues.BRLUSD = response.BRL.BRLUSD
        CoinsValues.ETHUSD = response.ETH.ETHUSD
        CoinsValues.LTCUSD = response.LTC.LTCUSD
        $("#Coin_Var_BTC").html(response.BTC.BTCVAR)
        $("#Coin_Var_BTC").removeAttr('class');
        $("#Coin_Var_BTC").addClass(response.BTC.BTCVARD)
        $("#Coin_Var_LTC").html(response.LTC.LTCVAR)
        $("#Coin_Var_LTC").addClass(response.LTC.LTCVARD)
        $("#Coin_Var_ETH").html(response.ETH.ETHVAR)
        $("#Coin_Var_ETH").addClass(response.ETH.ETHVARD)
})

function Calc() {
    $("#Coin_Value_BRL").html(
        (document.querySelector(".InputCoin").value * (CoinsValues.SLPUSD / CoinsValues.BRLUSD)).toFixed(2)
    )
    $("#Coin_Value_BTC").html(
        (document.querySelector(".InputCoin").value * (CoinsValues.SLPUSD / CoinsValues.BTCUSD)).toFixed(10)
    )
    $("#Coin_Value_ETH").html(
        (document.querySelector(".InputCoin").value * (CoinsValues.SLPUSD / CoinsValues.ETHUSD)).toFixed(10)
    )
    $("#Coin_Value_LTC").html(
        (document.querySelector(".InputCoin").value * (CoinsValues.SLPUSD / CoinsValues.LTCUSD)).toFixed(10)
    )
    $("#Coin_Value_USD").html(
        (document.querySelector(".InputCoin").value * (CoinsValues.SLPUSD / CoinsValues.USDUSD)).toFixed(2)
    )
}