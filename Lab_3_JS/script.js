var n = 1;
var auto = false;
//Функция переключения картинок в ручном режиме
function skip_picture_manual(){
   
    if (auto == false) {
                
        skip = document.getElementById("picture");
        if (n==4) {
            n = 1;
        } else {
            n++;
        }
            skip.src = "log" + n + ".jpg";

    } else{
        void(0);
    }
}
//Функция переключения картинок в авто режиме
function skip_picture_auto(){
   
    if (auto == true) {
        document.getElementById("text_value").innerHTML = "авто";     
        skip = document.getElementById("picture");
        if (n==4) {
            n = 1;
        } else {
            n++;
        }
            skip.src = "log" + n + ".jpg";

    } else{
        void(0);
    }
}
//Функция включения ручного режима
function turnOn_manual() {
    if (auto == true) {
        auto = false;
        document.getElementById("text_value").innerHTML = "ручной";
    } else {
        void(0);
    }
}

