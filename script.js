// Login Button Event Handler 
const loginBtn = document.getElementById("login");
loginBtn.addEventListener(
    "click",
    function () {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    });
// Deposite Button Event Handler
const depositBtn = document.getElementById("addDeposit");

depositBtn.addEventListener("click", function ()

    {
        const depositNum = getInputNumber('depositeAmount');
        updateSpanText('currentDeposit', depositNum);
        updateSpanText('currentBalance', depositNum);
        document.getElementById('depositeAmount').value = "";
    });
// Litre amount Button Event Handle
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    withdrawNum = getInputNumber("withdrawAmount");
    updateSpanText('currentWithdraw', withdrawNum);
    updateSpanText('currentBalance', -1 * withdrawNum);
    document.getElementById('withdrawAmount').value = "";
})


// Convert String into Number Function
function getInputNumber(id) {

    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}

function updateSpanText(id, depositNum) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = -depositNum + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

//litre calculation
function gameon() {
    let a = parseInt(document.getElementById("depositeAmount").value);
    let b = 100;
    let currentWithdraw = a / b;


    localStorage.setItem("amount", a);
    localStorage.setItem("petrolAmount", currentWithdraw);
    document.getElementById("currentWithdraw").innerHTML = currentWithdraw;
    return false;

}
//bill section

function passvalues() {

    document.getElementById("first").innerHTML = "";

    document.getElementById("heading").innerHTML = "Bill Receipt" + "<hr>";
    let amount = document.getElementById("amount");
    amount.innerHTML = "<br></br>" + "Your Paid Amount :  " + localStorage.getItem("amount") + " ₹";

    let petrol = document.getElementById("petrolAmount");
    petrol.innerHTML = "<br>" + "Your Fuel Amount:  " + localStorage.getItem("petrolAmount") + " L";

    document.getElementById("finalSection").classList.add("myStyle");

}