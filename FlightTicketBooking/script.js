function calculateFare(){
    const ticketClass = document.getElementById("ticketClass").value;
    const luggageWeight = parseFloat(document.getElementById("luggageWeight").value);
    const isStudent = document.getElementById("isStudent").value;
    const isSenior = document.getElementById("isSenior").value;
    const total = document.getElementById("total");

    let baseFare = {
        "Economy":500,
        "Buisness":700,
        "First Class":1000
    };

    let fare = baseFare[ticketClass];

    if(luggageWeight > 20){
        fare += (luggageWeight-20) * 5;
    }

    if (isStudent === "Yes"){
        fare *= 0.85;
    }

    if (isSenior === "Yes"){
        fare *= 0.90;
    }

    total.innerHTML = `Total: $ ${fare.toFixed(2)}`;
    
    
}