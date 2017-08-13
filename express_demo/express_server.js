var express = require('express');
var app = express();
var http = require('http');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// 미들웨어
app.use(express.static('public'));

// 얘를 라우터라고 하며, 여기서 일어나는 동작을 라우팅이라고 한다.
// router1 (localhost/) <- 요청 주소
app.get('/', function (req, res) {
    console.log('show request code '+req);
    res.send('Hello World!');   // controller <- 리턴 동작 정의
});

// router2 (localhost/login)
app.get('/login', function (req, res){
    res.send('<h1>please login first! </h1>;)'); // controller
});

/*********************************************/
// 동적 데이터 리턴하기
app.get('/dynamic', function(req, res){
    
    var time = Date();
    
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>
        </head>
        <body>
            hello, Dynamic! :)
            <ul>
            ${lis}
            </ul>

            <ul>
            ${time}
            </ul>
        </body>
    </html>`;
    
    res.send(output);
});
/*********************************************/

/*********************************************/
// 쿼리 스트링 학습
app.get('/departure', function(req,res){
    
    var topics = [
        'JavaScript is ...',
        'NodeJs is ...',
        'Express is ...'
    ];
    
    var index = req.query.id;
    var as = `
        <a href="/departure?id=0">JavaScript</a><br>
        <a href="/departure?id=1">NodeJs</a><br>
        <a href="/departure?id=2">Express</a><br>

        ${topics[index]}
    `
    res.send(as);
//    res.send(req.query.name);
});

// RESTful 한 url 만들기
// query string + params
app.get('/departure/:id', function(req, res){
    var param = req.params.id; 
    var query = req.query.mode;
    
    res.send(param+ ' , '+query);
})

// mulitple params
app.get('/topic/:id/:mode', function(req, res){
    
    var id = req.params.id;
    var mode = req.params.mode;
    
    res.send(id+' , '+mode);
});



app.get('/path', function(req, res){
    
    var xhr;
    var apiKey = 'bFNbGwjMxjtTaiMEroskKw';
    
    function searchPubTransPathAJAX(xhr,apiKey) {
	   xhr = new XMLHttpRequest();
	   var url = 'https://api.odsay.com/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey='+apiKey;
	   xhr.open("GET", url, true);
	   xhr.send();
	   xhr.onreadystatechange = function() {

		  if (xhr.readyState == 4 && xhr.status == 200) {
              console.log(">>>>>>>>> return from Odsay");
			 console.log( xhr.responseText ); // <- xhr.responseText 로 결과를 가져올 수 있음
		  }
	   }
    }
    
    console.log('start request');
    searchPubTransPathAJAX(xhr, apiKey);
    
    console.log(">>>>>>>>>>>>> get logic in my server")
    console.log(JSON.parse(xhr.responseText));
    res.send(JSON.parse(xhr.responseText));  
});

// 서버 활성화 설정해 놓은 port 와 hostName 의 주소로 들어오는 클라이언트들을 감지한다.
app.listen(80, function () {
  console.log('>>>>>>>>>>> Server Start !!');
});








