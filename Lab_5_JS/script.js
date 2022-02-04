//Переменная - триггер на заливку
var check_value = true;

//функция реализации прямоугольника
function draw() {
//Присвоение переменных 
    var height = document.getElementById('height').value; 
    var width = document.getElementById('width').value;
    var x =  document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var R = document.getElementById('R').value;
    var G = document.getElementById('G').value;
    var B = document.getElementById('B').value;
    var color = "rgba("+ R +","+ G + "," + B + "," + '1' + ")";

    //нахождение канваса
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    //очистка канваса
    ctx.clearRect(0,0,300,200);
    //выбор цвета заливки
    ctx.fillStyle = color;
    //построение фигуры + заливка
    ctx.strokeRect(x,y,width,height);
    ctx.fillRect(x,y,width,height);

}
//функция реализации многоугольника
function draw_2() {
//нахождение элементов 
    var R_c = document.getElementById('R_c').value;
    var G_c = document.getElementById('G_c').value;
    var B_c = document.getElementById('B_c').value;
    var R_b = document.getElementById('R_b').value;
    var G_b = document.getElementById('G_b').value;
    var B_b = document.getElementById('B_b').value;
    var canvas_2 = document.getElementById('canvas_2');
    var ctx_2 = canvas_2.getContext('2d');
    var n = document.getElementById("n").value;
    
    //математический расчет для построения многоугольника
    var R = 100;
    var ugol = 2*3.1415926/n;
    var alfa = 0;
    var shift = 200;
    var tekx = R, teky = 0;

    //задание цветов контура и заливки
    color_contur = "rgba("+ R_c +","+ G_c + "," + B_c + "," + '1' + ")";
    color_fill = "rgba("+ R_b +","+ G_b + "," + B_b + "," + '1' + ")";
    ctx_2.clearRect(0,0,400,400);
//построение многоугльника
    ctx_2.beginPath();
    ctx_2.moveTo(shift+tekx,shift+teky);

    for (var i=0; i<n; i++) {
        alfa += ugol;
        tekx = Math.floor(R*Math.cos(alfa));
        teky = Math.floor(R*Math.sin(alfa));
        ctx_2.lineTo(tekx+shift, teky+shift);
    }
//заливка с условием
    if (check_value == true) {
        ctx_2.fillStyle = color_fill
        ctx_2.fill();
    } else {
        void(0);
    }

//покраска контура
    ctx_2.strokeStyle = color_contur;
    ctx_2.stroke();
    
    
}
//функция проверяющая нажатие на чек бокс
function check_test () {
  //выполнение условий блокировки текстовых полей заливки  
        if (document.getElementById('check').checked) {
        check_value = true;
        document.getElementById('R_b').disabled = false;
        document.getElementById('G_b').disabled = false;
        document.getElementById('B_b').disabled = false;
    } else {
        check_value = false;
        document.getElementById('R_b').disabled = true;
        document.getElementById('G_b').disabled = true;
        document.getElementById('B_b').disabled = true;
    }

}
//Функция, устанавливающвя запрет на установление цветовых показателей >255 & <0
function on_change (id) {
        
    if (document.getElementById(id).value>255) {
        document.getElementById(id).value = 0;
        alert("Максимальное значение цвета может быть 255");
    }

    if (document.getElementById(id).value<0) {
        document.getElementById(id).value = 0;
        alert("Минимальное значение цвета может быть 0");
    }


    if (document.getElementById('n').value<4) {
        document.getElementById('n').value = 4;
        alert("Количество углов равностороннем многоугольнике должно быть больше 4-х");

    }
    

}
