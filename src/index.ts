const express = require('express'); //express 모듈 가져오기.
const app = express(); //Express 객체 생성
const port = 3000; //변수 'port' 선언

//route
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/profile', (req, res) => {
  // URL + Callback
  res.send('Profile page');
});

//port
app.listen(port, () => {
  console.log('Express server on port 3000!');
}); /*위에서 선언한 port변수 , 그리고 요청대기 완료 시 실행 될 콜백함수 지정 -> (()=>{
    console.log("Express server on port 3000!");*/
