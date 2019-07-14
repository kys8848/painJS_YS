
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


const INITIAL_COLOR = "#2c2c2c"; //초기화 지정용 사전설정
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE; //canvas 엘리먼트의 사이즈를 지정해줘야지 작동함
canvas.height = CANVAS_SIZE; 

ctx.fillStyle ="white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);//이걸 안해주면 default 배경색이 없어서 투명하게 나옴

ctx.strokeStyle = INITIAL_COLOR; //선의 색깔 사전입력 stroke의 의미? 놀르 한번 젖는일(일)
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5; // 선의 굵기 사진입력

/* 색채우는 도형 TEST
ctx.fillStyle ="green"; //네모채움의 색깔결정
ctx.fillRect(50,20,100,40); //네모위치 와 사이즈 
ctx.fillStyle = "purple";
ctx.fillRect(80,100,100,40);
*/

let painting = false;
let filling = false;



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

function handleColorClick(event){
    //console.log(event.target.style); // 무슨 이벤트 내용이 오는지 확인용
    const color =event.target.style.backgroundColor;
    //console.log(color);
    ctx.strokeStyle = color; //default 지정색을 바뀐색으로 overide 시키
    ctx.fillStyle = color; // 샊깔 누르면 fill 색깔도 동일하게 지정
}

function handleRangeChange(event){
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
        
    }else {
        filling = true;
        mode.innerText =  "Paint";
        
    }

}

function handleCanvasClick(){// 사격형 만들기 시작
    if(filling){ //채우는 상태에서만 채워지도록 if(fiile =false에서는 채워지지 않음)
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); //canvas사이즈와 동일
    }
    
}

function handleCM(event){
    event.preventDefault(); //우클릭 방지(눌러도 메뉴가 안나옴)

}
function handleSaveClick(){
    const image = canvas.toDataURL();//image/jpeg는 png보다 품질떨어짐(default가 png임)
    const link = document.createElement("a");//anchor <a>  링크 속성 지정
    link.href = image;
    link.download = "PainJS[Exported]";
    console.log(link);
    link.click();
}


if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);  //캔버스 안에서 움직일？？
    canvas.addEventListener("mousedown", startPainting);  //mousedown 은 마우스를 클릭 눌렀을때
    canvas.addEventListener("mouseup",stopPainting); //클릭을 땟을때
    canvas.addEventListener("mouseleave", stopPainting); // 마우스커서가 캔버스를 벗어났을때
    canvas.addEventListener("click",handleCanvasClick); // 채우는 클릭동장
    canvas.addEventListener("contextmenu", handleCM);


}

console.log(Array.from(colors));  // array.form을 통해 array를 가지게됨 예) 0: div.controls__color.jsColor 이런식


Array.from(colors).forEach(what =>
    what.addEventListener("click",handleColorClick));//약간 생소한 부분임 어레이중 각각의 요소를 분리해내어 이벤트 클릭시 해당 내용을 긁어온다 정도로 해석
// 여기 안에서 what은 아무것으로 바꿔도 상관없음
// 그냥 그 array안에 있는 각각의 아이템들을 대표 하는것뿐임
// what 이라는 어레이 엘레멘트 안에서 클릭을 하면 핸들 컬러 클릭이 실행됨


if(range){ // 펜굵기 조정 구현 
    range.addEventListener("input", handleRangeChange); //input element를 사용했으므로 input에 반응
    
}
// 배경색 가득 채우기 기능 구현
if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}
