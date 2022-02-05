var canvas; //переменаая для канваса
var ctx; //переменная для getContext
var color = 'red'; //цвет по умолчанию

//Фуекция инициализации
function init() {

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    //Ожидание нажатий клавиш или мыши
    document.addEventListener("keydown", putRect);
    document.addEventListener("mousedown", putRect);
    document.addEventListener("mousemove", move);

    //Цвет по умолчанию
    ctx.fillStyle = color;

    //Обводка канваса
    ctx.strokeRect(0,0,640,480);

}
//Функция проверки нажатых клавиш или мыши
function putRect (event) {

    //Выборка нужного цвета при нажатии определенной клавиши (1, 2, 3)
    if (event.keyCode == 49) {color= 'red'}
    if (event.keyCode == 50) {color= 'blue'}
    if (event.keyCode == 51) {color= 'green'}
    ctx.fillStyle = color; //присваиваем цвет
    
    //Считывание координата указателя мыши
    var x = event.offsetX;
    var y = event.offsetY;
    
    
    //Рисуем прямоугольник
    ctx.fillRect(x,y,20,20);

    if (event.keyCode == 67 ) {
        ctx.clearRect(1,1,640,480);
     }
     
    ctx.strokeRect(0,0,640,480);
}

//Функция визуализирующая координаты указателя мыши
function move (event) {
    var x = event.offsetX;
    var y = event.offsetY;
    document.getElementById('x').value = "x=" + x;
    document.getElementById('y').value = "y=" + y;
}

