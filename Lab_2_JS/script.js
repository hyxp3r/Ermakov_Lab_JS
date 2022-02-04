//Выпадающий список
function showDescription(combo) {

    var descField = document.getElementById("description");
    switch (combo.value) {
        case "A" : descField.innerHTML = "Мотоциклы"; break;
        case "B" : descField.innerHTML = "Легковые автомобили"; break;
        case "C" : descField.innerHTML = "Грузовые автомобили"; break;
        case "D" : descField.innerHTML = "Автобусы"; break;
        case "E" : descField.innerHTML = "Автомобили с прицепом"; break;
    }
}

//Делители
function showDeliteli(spinner) {

    var text = "";
    var n = parseInt(spinner.value);
    for (var i=1; i<=n; i++) {
        if (n%i==0) {
            text += i;
            text += " ";

        }
    }
    document.getElementById('deliteli').innerHTML = text;

}

//Смена цвета
function changecolor(range) {

    var color = "rgb(" + range.value +", 0, 0)";
    document.getElementById("mycolor").style.background = color;
    document.getElementById('color-text').innerHTML = color;
}

//Радио кнопка
function ShowDescriptions_2(category) {

    var descField = document.getElementById("description_2")
    switch (category) {
        case "A": descField.innerHTML = "Мотоциклы"; break;
        case "B": descField.innerHTML = "Легковые автомобили"; break;
        case "C": descField.innerHTML = "Грузовые автомобили"; break;
        case "D": descField.innerHTML = "Автобусы"; break;
        case "E": descField.innerHTML = "Автомобили с прицепом"; break;
    }
}

//Молоко
function calculate() {

    var price = parseFloat(document.getElementById("coffe").value)
    if (document.getElementById("check").checked) {
        document.getElementById("milk").disabled = false;
        price += parseFloat(document.getElementById("milk").value)
        
    } else {
        document.getElementById("milk").disabled = true;
    }
    document.getElementById("total").value = price;
}