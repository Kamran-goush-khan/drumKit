var numberOfButton = document.querySelectorAll(".drum").length;

var isTrue = true;

for (var i = 0; i < numberOfButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {



    // Swithch statement to determine right audio should be play after a paricular mouse touch.

    var buttonClicked = this.innerHTML;

    makeSound(buttonClicked);

    addAnimation(buttonClicked);


  });
}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  addAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(key);
  }

}

function addAnimation(animatedKey){
  var activeButton = document.querySelector('.' + animatedKey);

  activeButton.classList.add("pressed");
  activeButton.style.color = "black";

  setTimeout(function()  {
    activeButton.classList.remove("pressed");
    activeButton.style.color = "#da0463";
  }, 200);
}
