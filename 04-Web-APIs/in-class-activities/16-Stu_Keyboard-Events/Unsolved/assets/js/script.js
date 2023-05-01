



function keydownAction(event) {
  event.preventDefault();
  // TODO: Complete keydown function
// Keydown event
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
  document.querySelector("#key").innerHTML = "";

}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);

