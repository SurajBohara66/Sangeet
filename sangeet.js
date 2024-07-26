let music = document.querySelector(".sound");
let song = document.querySelector(".song");
let click = 0;
music.addEventListener("click" , () =>{
if (click == 0) {
  song.play()
  click = 1;
  music.classList.add("taal")
  click = 1;
}
else if (click == 1) {
  song.pause()
  music.classList.remove("taal")
  click = 0;
}
  
})
let laptop = document.querySelector(".lappy");
let para =document.querySelector(".para");
var mouse = 0;
laptop.addEventListener("mouseenter" , () =>{
if (mouse == 0) {
para.classList.add("paragraph");
mouse = 1;
}

})
laptop.addEventListener("mouseout" , () =>{
if (mouse ==1) {
para.classList.remove("paragraph");
mouse = 0;
}
})