function BookTickets(){
    const name = document.getElementById("Name").value;
    const ShowSelect = document.getElementById("showSelect").value;
    const Tickets = parseInt(document.getElementById("tickets").value);
    const TimeSelect = document.getElementById("timeSelect").value;
    const SeatSelect = document.getElementById("seatSelect").value;

    const seatPrice = parseInt(SeatSelect.split("₹")[1],10);

    let totalPrice = Tickets * seatPrice;

    const data = {
        Name:name,
        NumberOfTickets:Tickets,
        SeatType:SeatSelect,
        ShowName:ShowSelect,
        ShowTime:TimeSelect
    };
    console.log("Sending data:",data);

    try{
        const response = fetch("http://127.0.0.1:3000/registerCustomers",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        const result = response.JSON();
        console.log("Response from server:", result);

        if(response.ok){
            alert("Booking Successfully!");
        }else{
            alert("Booking Failed. Try again!");
        }
        
    }catch(error){
        console.log("Error:", error);
        alert("Error:");
        
    }
    


    document.getElementById("txtName").innerHTML = name;
    document.getElementById("showName").innerHTML = ShowSelect;
    document.getElementById("numTickets").innerHTML = Tickets;
    document.getElementById("showTime").innerHTML = TimeSelect;
    document.getElementById("seatType").innerHTML = SeatSelect;
    document.getElementById("totalBill").innerHTML = totalPrice;

    document.getElementById("Name").value = "";
    document.getElementById("showSelect").value = "";
    document.getElementById("tickets").value = "";
    document.getElementById("timeSelect").value = "";
    document.getElementById("seatSelect").value = "";
}