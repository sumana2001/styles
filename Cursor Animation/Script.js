var cursor = document.getElementById("Cursor");

document.onmousemove = function(e){
    cursor.style.left = (e.pageX-23)+"px";
    cursor.style.top = (e.pageY-23)+"px";
    cursor.style.background = "darkslateblue";
    cursor.style.display = "block";
}
document.onclick = function(e){
    cursor.style.background = "white";
}