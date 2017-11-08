var express = require('express');
var app = express();
var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.get('/route', function(req, res){

    console.log('start request');
    
    var sx = req.query.SX;
    var sy = req.query.SY;
    var ex = req.query.EX;
    var ey = req.query.EY;
    var apiKey = 'bFNbGwjMxjtTaiMEroskKw';
    
    var xhr = new XMLHttpRequest();
    var url = 'https://api.odsay.com/api/searchPubTransPath?SX='+sx+'&SY='+sy+'&EX='+ex+'&EY='+ey+'&apiKey='+apiKey;
    
    console.log(url);

    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(">>>>>>>>> return from Odsay");

            console.log(">>>>>>>>>>>>> get json in my server")
            res.json(JSON.parse(xhr.responseText));
        }
    }
});

app.get('/message', function(req, res){
    
    var result = new Object();
    result.message = "Asdasd ";
    
    console.log(JSON.stringify(result));
    res.json(200, result);
});

// 서버 활성화 설정해 놓은 port 와 hostName 의 주소로 들어오는 클라이언트들을 감지한다.
app.listen(8000, function () {
  console.log('>>>>>>>>>>> Server Start !!');
});








