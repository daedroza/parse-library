function setup() {
    

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

for (i = 1; i < 1000; i++) {
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
    var userINFO = { id: usercardID };
	    $.ajax({
            url: "",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(userINFO),
            success: function(responseINFO) {
                var str = JSON.stringify(responseINFO, null, 4);
                document.write(str + "<br> <br>");
            }
        });
}

function draw() {
  
}
