const fs = require('fs');
console.log(1);

// Sync
// 두번째 값으로는 옵션(인코딩 옵션) 을 줄 수 있다.
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);


// Async
console.log(2);

fs.readFile('data.txt', {encoding:'utf8'}, function(err, data){
    console.log(3);
    console.log(data);
});
console.log(4);
