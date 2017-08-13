var express = require('express');
var app = express();
var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function searchPubTransPathAJAX(res, apiKey) {
    
    var xhr = new XMLHttpRequest();
    var url = 'https://api.odsay.com/api/searchPubTransPath?SX='+sx+'&SY='+sy+'&EX='+ex+'&EY='+ey+'&apiKey='+apiKey;
	   
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(">>>>>>>>> return from Odsay");
            console.log( xhr.responseText ); // <- xhr.responseText 로 결과를 가져올 수 있음
            
            console.log(">>>>>>>>>>>>> get logic in my server")
            res.send(JSON.parse(xhr.responseText));     
		  }
    }
}

app.get('/route', function(req, res){
    
    var sx = req.query.departX, sy = req.qeury.departY;
    var ex = req.qeury.destX, ey = req.query.destY;
    
    var apiKey = 'bFNbGwjMxjtTaiMEroskKw';
    
    console.log('start request');
    searchPubTransPathAJAX(res, apiKey);
});

// 서버 활성화 설정해 놓은 port 와 hostName 의 주소로 들어오는 클라이언트들을 감지한다.
app.listen(80, function () {
  console.log('>>>>>>>>>>> Server Start !!');
});








