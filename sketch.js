function setup() {
    

}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
        break;
        }
    }
}


var usercardID;
/*var _userINFO = { useremailid: "" };

     $.ajax({
        url: "",
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(userINFO),
        success: function (response) {
		    console.log(response.cardID);
		    }
		
});
*/

for (i = 0; i < 2000; i++) {
    var _cardID;
    if (i < 10) {
    _cardID = "";
    }else if(i < 100) {
    _cardID = "";
    }else if(i < 1000) {
    _cardID = "";
    }else if(i < 2000) {
    _cardID = "";
    }
    usercardID = _cardID + i;
    document.write(value + "<br>");
    var userINFO = { id: usercardID };
	    $.ajax({
	        url: "",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(userINFO),
            success: function(responseINFO) {
                console.log(userINFO);
                console.log(responseINFO);
                var str = JSON.stringify(responseINFO, null, 4);
                document.write(str + "<br> <br> <br> <br> <br>");
            }
        });
    sleep(5000);
}

function draw() {
  
}
