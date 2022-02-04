var x = 50, y = 50; //Начальные координаты
var canvas; // Объявление canvas
var ctx; //Объявление Context
var color = 'blue';
var height = 20;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0,0,640,480);
    ctx.fillStyle =  color;
    ctx.fillRect(x,y,height,height);
    

    document.addEventListener("keydown", move);
    

}

function move(event) {
    ctx.clearRect(x,y,height,height); //Удаление квадрата со старого места

    //Смена координат в зависимости от нажатой клавиши + запрет на выход за рамки
    
    if (height == 10) {
        if (event.keyCode == 39 & x!=630) {x+=10}
        if (event.keyCode == 37 & x!=0) {x-=10}
        if (event.keyCode == 40 & y!=470) {y+=10}
        if (event.keyCode == 38 & y!=0) {y-=5}
    }

    if (height == 20) {
        if (event.keyCode == 39 & x!=620) {x+=10}
        if (event.keyCode == 37 & x!=0) {x-=10}
        if (event.keyCode == 40 & y!=460) {y+=10}
        if (event.keyCode == 38 & y!=0) {y-=10}
    }

    if (height == 30) {
        if (event.keyCode == 39 & x!=610) {x+=10}
        if (event.keyCode == 37 & x!=0) {x-=10}
        if (event.keyCode == 40 & y!=450) {y+=10}
        if (event.keyCode == 38 & y!=0) {y-=10}
    }

    
    //Смена цвета в зависимости от нажатой клавиши
    if (event.keyCode == 49) {color= 'blue'}
    if (event.keyCode == 50) {color= 'red'}
    if (event.keyCode == 51) {color= 'green'}

    if (event.keyCode == 83) {height = 10}
    if (event.keyCode == 77) {height= 20}
    if (event.keyCode == 66) {height= 30}
    

    //Отобразим новые координаты в текстовом поле
    document.getElementById("x").value = "x=" + x;
    document.getElementById("y").value = "y=" + y;

    //Рисуем квадрат на новом месте
    ctx.fillStyle =  color;
    ctx.fillRect(x,y,height,height);
    ctx.strokeRect(0,0,640,480);
    
  

}