
const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event){
    //console.log(event); mousemove event 값에 대한 리턴값 확인 
    //console.log(event.offsetX,event.offsetY); //offset은 순수 canvas안에서의 절대값(0,0)
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    //console.log(event);
    painting = true;

}

function onMouseUp(event) {
    stopPainting()
}

function onMouseLeave(event) {
    painting = false;     
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);  //캔버스 안에서 움직일？？
    canvas.addEventListener("mousedown", onMouseDown);  //mousedown 은 마우스를 클릭 눌렀을때
    canvas.addEventListener("mouseup",onMouseUp); //클릭을 땟을때
    canvas.addEventListener("mouseleave", stopPainting); // 마우스커서가 캔버스를 벗어났을때

}
