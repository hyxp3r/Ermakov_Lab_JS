var n=1;
function change_image() {
    document.getElementById("img_"+n).style.borderColor="black";
    if (n==4) {
        n = 1;
    } else {
        n++;
    }
    document.getElementById("img_"+n).style.borderColor="red";
    document.getElementById("big_img").src = "log"+n+".jpg";
    



}