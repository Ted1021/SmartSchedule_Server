var express = require('express');
var app = express();
var http = require('http');

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
