var type_car; //Объявление категории машины
var canvas; // Объявление canvas
var ctx; //Объявление Context
img = new Image(); //Объявление картинки

 //Функция демонстрации категории
function category() {
    
    switch(type_car) {
        case "A": alert('Мотоциклы'); break;
        case "B": alert('Легковые автомобили'); break;
        case "C": alert('Грузовики'); break;
        case "D": alert('Автобусы'); break;
        case "E": alert('Автомобили с прицепом'); break;
    }
}
//Функция валидации формы
function validation() {

    var email = document.getElementById("email").value; //присваиваем значение email
    var pattern = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,5}$/i; //регулярное выражение проверки email
    var valid = pattern.test(email); //проверяем правильность email
   
//Смена картинки при правильном/неправильном вводе email
    if (valid) {
        document.getElementById("img_2").src="valid.png";
        document.getElementById("img_2").style.visibility = "visible";
    }
        else {
            document.getElementById("img_2").src="invalid.png";
            document.getElementById("img_2").style.visibility = "visible";

    }
//Скрываем картинку, если email не заполнен
    if (email=='') {
        document.getElementById("img_2").style.visibility = "hidden";
    }
}
//Функция инициализации
function init () {

    document.getElementById("img_2").style.visibility = "hidden"; //по умолчанию, картинка email скрыта
}

//Функция запуска бегующего человечка на канвасе
function canvas_man() {
        
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0,0,640,480);
    
        document.addEventListener('mousemove', move);

}

//Функция, реализующая бег человечка за курсором
function move (event) {

    //Создание эффекта бега человечка, за счет смены картинок
    if (img.src == 'file:///C:/VS%20Code/RGR_JS/man_1.png') {
        img.src = 'man_2.png';
    }
    else{ 
        img.src = 'man_1.png';
    }

    //Очистка человечка на предыдущих координатах
    ctx.clearRect(x-40,y-40,50,50);

    //Запоминание координат курсора
    x = event.offsetX;
    y = event.offsetY;

   //Показываем координаты положения человечка (просто, чтобы было, можно убрать) 
    document.getElementById("x").value = "x=" + (x-40);
    document.getElementById("y").value = "y=" + (y-40);

    //Отрисовка человечка
    ctx.drawImage(img, x-40, y-40, 50, 50);

    //Строим канвас, после его стирания картинкой
    ctx.strokeRect(0,0,640,480);





}