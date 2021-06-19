function Play(e) {
  var image = e.children[0];

  e.classList.add('btn__animplay');
  if (image.getAttribute("src") === "./images/fi-rr-play.svg") {
    e.classList.add('btn_clicked');
    image.setAttribute("src", "./images/fi-rr-pause.svg");
  } else
  {
      e.classList.remove('btn_clicked'); 
      image.setAttribute("src", "./images/fi-rr-play.svg");
  }
  setTimeout(function(){
      e.classList.remove("btn__animplay");
  },500);
}
