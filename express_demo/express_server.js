var express = require('express');
var app = express();
var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function searchPubTransPathAJAX(res, apiKey, sx, sy, ex, ey) {
    
    var xhr = new XMLHttpRequest();
    var url = 'https://api.odsay.com/api/searchPubTransPath?SX='+sx+'&SY='+sy+'&EX='+ex+'&EY='+ey+'&apiKey='+apiKey;

    console.log(url);
    
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(">>>>>>>>> return from Odsay");
//            console.log( xhr.responseText ); // <- xhr.responseText 로 결과를 가져올 수 있음
            
            console.log(">>>>>>>>>>>>> get logic in my server")
            res.send(JSON.parse(xhr.responseText));     
		  }
    }
}

app.get('/route', function(req, res){
    
    var sx = req.query.SX
    var sy = req.query.SY;
    var ex = req.query.EX
    var ey = req.query.EY;
    
    console.log('SX = '+sx+' / SY = '+sy);
    console.log('EX = '+ex+' / EY = '+ey);
    
    var apiKey = 'bFNbGwjMxjtTaiMEroskKw';
    
    console.log('start request');
    searchPubTransPathAJAX(res, apiKey, sx, sy, ex, ey);
});

// 서버 활성화 설정해 놓은 port 와 hostName 의 주소로 들어오는 클라이언트들을 감지한다.
app.listen(80, function () {
  console.log('>>>>>>>>>>> Server Start !!');
});








