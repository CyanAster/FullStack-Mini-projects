document.querySelectorAll(".drum").forEach(img => {
  img.addEventListener("click", function () {
    var key = this.classList[1]; // Get the specific class ('w', 'a', etc.)
    playSound(key);
  });
});

document.addEventListener("keypress", function (e) {
  var key = e.key.toLowerCase();
  playSound(key);
});

function playSound(key) {
  let audio;
  switch (key) {
    case 'w':
      audio = new Audio("sounds/tom-1.mp3");
      break;
    case 'a':
      audio = new Audio("sounds/tom-2.mp3");
      break;
    case 's':
      audio = new Audio("sounds/tom-3.mp3");
      break;
    case 'd':
      audio = new Audio("sounds/tom-4.mp3");
      break;
    case 'j':
      audio = new Audio("sounds/snare.mp3");
      break;
    case 'k':
      audio = new Audio("sounds/crash.mp3");
      break;
    case 'l':
      audio = new Audio("sounds/kick-bass.mp3");
      break;
    default:
      console.log("Unrecognized key:", key);
      return;
  }
  audio.play().catch(error => console.log("Audio playback failed:", error));
}
