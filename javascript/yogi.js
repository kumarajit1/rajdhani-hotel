function RegisterClick() {
    document.getElementById("mdlName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("mdlDate").innerHTML = document.getElementById("chkDate").value;
    document.getElementById("mdlDay").innerHTML = document.getElementById("numDay").value;
    document.getElementById("mdlPerson").innerHTML = document.getElementById("numPerson").value;
    document.getElementById("mdlAdvance").innerHTML = document.getElementById("adAmount").value;

    var userDetails = {
        "Amount": "2000"
    }
    function VerifyAmount() {
        var Amount = document.getElementById("adAmount").value;
        if (Amount == userDetails.Amount) {
            document.getElementById("register").disabled = false;
        }
    }

    var c = 0;
    var sum = 0;
    var roomName = "";
    var roomCost = 0;
    var amenitiName = "";
    var amenitiCost = 0;
    var total = 0;


    if (optDelux.checked) {
        roomCost = 2500;
        roomName = optDelux.value;
    }
    if (optSuite.checked) {
        roomCost = 4000
        roomName = optSuite.value;
    }
    if (optAc.checked) {
        amenitiCost = 1000;
        roomCost += amenitiCost;
        amenitiName += optAc.value + "<br>";
    }
    if (optLocker.checked) {
        amenitiCost = 300;
        
        amenitiName += optLocker.value + "<br>";
    }


    var a = (parseInt(document.getElementById("numDay").value) - 2) * 1000;
    var b = (parseInt(document.getElementById("numPerson").value) - 2) * 1000;
    c = a + b;
    total = (roomCost + amenitiCost);
    sum = total + c;
    document.getElementById("mdlRoom").innerHTML = roomName;
    document.getElementById("mdlAmeniti").innerHTML = amenitiName;
    document.getElementById("mdlBalance").innerHTML = sum;
}