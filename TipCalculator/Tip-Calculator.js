function calculateClick(){
    const bill = parseFloat(document.getElementById("billAmt").value);
    const tip = parseFloat(document.getElementById("tipAmt").value);
    const msg = document.getElementById("total");

    if (isNaN(bill) || isNaN(tip)){
        msg.innerHTML = "Please enter a valid numbers!";
        return;
    }

    let tipAmount =(tip/100 ) * bill;
    let total = bill + tipAmount;
    msg.innerHTML = "Total: " + total.toFixed(2); 
        

}
function clearClick(){
    const msg = document.getElementById("total");
    document.getElementById("billAmt").value = "";
    document.getElementById("tipAmt").value = "";
    msg.innerHTML = "";
}