for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //An Anonymous Function
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(keyPressed) {
  switch (keyPressed) {
    case "w": var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "a": var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "s": var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "d": new Audio("sounds/tom-4.mp3").play();
              break;
    case "j": new Audio("sounds/snare.mp3").play();
              break;
    case "k": new Audio("sounds/crash.mp3").play();
              break;
    case "l": new Audio("sounds/kick-bass.mp3").play();
              break;
    default:  break;
  }
}

function buttonAnimation(key) {
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function() {document.querySelector("."+key).classList.remove("pressed")},100);
}
