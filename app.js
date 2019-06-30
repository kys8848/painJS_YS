
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c"; //선의 색깔 사전입력 stroke의 의미? 놀르 한번 젖는일(일)
ctx.lineWidth = 2.5; // 선의 굵기 사진입력

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting(){
    painting = true;

}

function onMouseMove(event){
    //console.log(event); mousemove event 값에 대한 리턴값 확인 
    //console.log(event.offsetX,event.offsetY); //offset은 순수 canvas안에서의 절대값(0,0)
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){        ///클릭없이 움직일땐 비긴패스랑 무브투(엑스와이)를 실행하다가 
        ctx.beginPath();  ///만약! 클릭시!(paintiing=true) --> 페인팅이 트루가됨 --> 여긴 더이상 작동안함 
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

/*function onMouseDown(event) {
    //console.log(event);
    painting = true;

}*///어떠한 이유로 삭제..

function onMouseUp(event) {
    stopPainting();
}

function onMouseLeave(event) {
    painting = false;     
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);  //캔버스 안에서 움직일？？
    canvas.addEventListener("mousedown", startPainting);  //mousedown 은 마우스를 클릭 눌렀을때
    canvas.addEventListener("mouseup",stopPainting); //클릭을 땟을때
    canvas.addEventListener("mouseleave", stopPainting); // 마우스커서가 캔버스를 벗어났을때

}
