


//Функуия рисования первой фигуры
function draw() {

    var x = 410; //Задаем координату Х с которой начнем рисунок
    var R = 90; //Радиус

    //Обращение к канвасу + очистка
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,640,480);

    //Цикл создания фигуры
    while (R>0) {
        ctx.beginPath();
        ctx.moveTo(x,220);
        ctx.arc(320,220,R,0, Math.PI*2, true);
        x -= 5;
        R -= 5;
        ctx.strokeStyle = '#'+Math.floor(Math.random()*16777215).toString(16); //Задание случайного цвета
        ctx.fillStyle = "red";
        ctx.lineWidth = 1;
        ctx.stroke();
      
    }   
  
}
//Функуия рисования второй фигуры
function draw_2() {
    var x_2 = 320; //Задаем координату Х радиуса
    var R = 90; //Радиус
    
    //Обращение к канвасу + очистка
        canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,640,480);
    
    //Цикл создания фигуры
    while (R>0) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16); //Переменная хранит случайный цвет
        ctx.beginPath();
        ctx.moveTo(410,220);
        ctx.arc(x_2,220,R,0, Math.PI*2, true);
        x_2 +=5;
        R -= 5;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();

    }






}