const currencyCodes = ["AUD","BGN","BRL","CAD","CHF","CNY","CZK","DKK","EUR","GBP","HKD","HRK","HUF","IDR","ILS","ISK","JPY","KRW","MXN","MYR","NOK","NZD","PHP","PLN","RON","RUB","SEK","SGD","THB","TRY","USD","ZAR"];

let selectionlistfrom = document.getElementById("fromcurr");
let selectionlistto = document.getElementById("tocurr");
let outputamt = document.getElementById("outputamt")
let inputamt = document.getElementById("inputamt")
let fromimg = document.getElementById("fromimg")
let toimg = document.getElementById("toimg")

currencyCodes.forEach(element => {
    let ele = document.createElement("option");
    ele.value = element;
    ele.innerText = element;
    selectionlistfrom.append(ele);
});

currencyCodes.forEach(element => {
    let ele = document.createElement("option");
    ele.setAttribute("value",element);
    ele.innerText = element;
    selectionlistto.append(ele);
});

selectionlistfrom.addEventListener("change",() => {
    let val = selectionlistfrom.value;
    let newval = val.slice(0,-1);
    fromimg.setAttribute("src",`https://flagsapi.com/${newval}/flat/32.png`)
})

selectionlistto.addEventListener("change",() => {
    let val = selectionlistto.value;
    let newval = val.slice(0,-1);
    toimg.setAttribute("src",`https://flagsapi.com/${newval}/flat/32.png`)
})


let btn = document.getElementsByTagName("button")[0];

const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_q458mqLSeDkJhPqhl9yY14hY4GyoM6w03FWbSihq"

const getData = async (amtfrom,amtto) => {
    let response = await fetch(URL);
    let data = await response.json();
    let conversion = data.data
    let x = conversion[amtfrom];
    let y = conversion[amtto];
    let val = parseFloat(inputamt.value);
    outputamt.value = (val * (y / x)).toFixed(2);
}



btn.addEventListener("click",(e) => {
    e.preventDefault();
    let amtfrom = selectionlistfrom.value;
    let amtto = selectionlistto.value;
    getData(amtfrom,amtto);
})

