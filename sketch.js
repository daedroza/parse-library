function setup() {
    

}

var _userID;
var __userID;
var userID;

for (i = 1; i < 1000; i++) {

    if (i < 10) {
    _userID = "";
    }else if(i < 100) {
    _userID = "";
    }else if(i < 1000) {
    _userID = "";
    }else if(i < 2000) {
    _userID = "";
    }
    
    userID = _userID + i;
    
    var __userID = { id: userID };
    
	    $.ajax({
            url: "",
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(__userID),
            success: function(responseINFO) {
                var _responseINFO = JSON.stringify(responseINFO, null, 4);
                document.write(_responseINFO + "<br> <br>");
            }
        });
}

function draw() {
  
}
