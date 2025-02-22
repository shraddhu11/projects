function registerClick(){
    var customerName = document.getElementById("custName").value;
    if(customerName == ""){
        document.getElementById("msg").innerHTML = "Name Required";
    }else{
        document.getElementById("lblName").innerHTML = document.getElementById("custName").value;
        document.getElementById("lblDate").innerHTML = document.getElementById("date").value;
        document.getElementById("lblDay").innerHTML = document.getElementById("tDays").value;
        document.getElementById("lblPerson").innerHTML = document.getElementById("tPerson").value;

    var DelRoom = document.getElementById("delRoom");
    var SuitRoom = document.getElementById("suitRoom");

    var AcCheckbox = document.getElementById("acCheck");
    var LockCheckbox = document.getElementById("lockCheck");

    var RoomType = "";
    var Amenties = "";

    var RoomRent = 0;
    var AmntCost = 0;

    if(DelRoom.checked){
        RoomType = DelRoom.value;
        RoomRent = 2500;
    }
    if(SuitRoom.checked){
        RoomType = SuitRoom.value;
        RoomRent = 4000;
    }
    if(AcCheckbox.checked){
        Amenties = AcCheckbox.value +"<br>";
        AmntCost = 1000;
        RoomRent += AmntCost;
    }
    if(LockCheckbox.checked){
        Amenties = LockCheckbox.value +"<br>";
        AmntCost = 300;
        RoomRent += AmntCost;
    }
    document.getElementById("lblRtype").innerHTML = RoomType;
    document.getElementById("lblAmnt").innerHTML = Amenties;
    document.getElementById("lbltotal").innerHTML = "&#8377;" +RoomRent;

}
}
function hideMssg(){
var custName = document.getElementById("custName").value;
if(custName != ""){
    document.getElementById("msg").innerHTML = "";
}else{
    document.getElementById("msg").innerHTML = "*Name Required";
}
}

function advanceClick(){
    var adAmt = document.getElementById("advance").value;
    if(adAmt != ""){
        document.getElementById("AdvanceAmt").innerHTML = " ";
    }else{
        document.getElementById("AdvanceAmt").innerHTML = "*Advanced is mandatory".fontcolor('red');
    }
}