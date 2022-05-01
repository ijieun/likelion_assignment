
//버튼 클릭시 이미지 변경 
function image_change(){
    var imgTag = document.getElementById("selfie").src="images/me2.jpg";
}

//버튼 클릭시 컬러 랜덤 변경
function color_click(){
    var randomNum = parseInt(Math.random()* 0xffffff);
    randomNum = randomNum.toString(16);
    document.body.style.color= '#'+ randomNum;
}

//들어온 시간 구하기
var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);
var hour = today.getHours();
var Min = today.getMinutes();
var sec = today.getSeconds();
var Msec = today.getMilliseconds();
alert("안녕하세요. "+year+"년 "+month+"월 "+day+"일 "+hour+"시 "+Min+"분 "+sec+"초 "+Msec+"에 들어오셨군요?    "+"환영합니다 ^^");


//다크모드 변경
function dark_button(){
    var my = document.body;
    my.classList.toggle("dark-mode");
    // if(currentClass =="dark-mode"){
    // document.getElementById('dark_button').innerHTML="낮 모드 전환";}
}

