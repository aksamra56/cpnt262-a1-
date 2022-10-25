const body = document.querySelector("body");
const button = document.querySelector("button");
const description = document.querySelector("p");

/* boolean tutorial used to determine between both  */
let isLight = true;

/* Allows both modes to work once command is made */
let darkMode = function(){

  body.classList.remove("light-mode");
  body.classList.add("dark-mode");

  button.classList.remove("light-mode-button");
  button.classList.add("dark-mode-button");

  button.innerHTML = `Light Mode`;

}

/* Contrast when pressing light mode */
let lightMode = function(){

  body.classList.remove("dark-mode");
  body.classList.add("light-mode");

  button.classList.remove("dark-mode-button");
  button.classList.add("light-mode-button");

  button.innerHTML = `Dark Mode`;


}

//Mode button in action 
let buttonPress = function(){

  if (isLight){
    darkMode();
    isLight = false;    
  }
  else {
    lightMode();
    isLight = true;
  }
}

//Button call
button.addEventListener("click", buttonPress);



const buttonToBeClicked = document.getElementById("example-button");

const resetButton = document.getElementById("reset-button");

// the text that the button is initialized with
const initialText = buttonToBeClicked.textContent;

// the text that the button contains after being clicked
const clickedText = "You have clicked this button.";

// we hoist the event listener callback function
// to prevent having duplicate listeners attached
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener(
    "click",
    eventListener,
    {
      passive: true,
      once: true
    }
  );
}

// when the reset button is clicked, the example button is reset,
// and allowed to have its state updated again
resetButton.addEventListener(
  "click",
  () => {
    buttonToBeClicked.textContent = initialText;
    addListener();
  }
);

addListener();

