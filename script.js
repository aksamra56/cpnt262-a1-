// selects the button tag on HTML page//
let clickButton = document.querySelector("button");

//selects the paragraph tag  on HTML page //
let joke = document.querySelector("p");

// When user clicks button activates 'click' and the function//
clickButton.addEventListener("click", function () {
  // Assigning randomJokes variable with  generate_randomJokes //
  let randomJokes = generate_randomJokes(7);

  // Creates a random number function //
  function generate_randomJokes(max_number) {
    return Math.round(Math.random() * max_number);
  }

  // stating newJoke is open and not defined //
  let newJoke = "";

  // assigning a number and the joke together //
  if (randomJokes == 0) {
    newJoke = "I went to buy some camo pants but couldnt find any";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 1) {
    newJoke = "I failed math so many times at school, I cant even count";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 2) {
    newJoke = "I used to have a handle on life, but then it broke";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 3) {
    newJoke = "Never trust atoms; they make up everything";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 4) {
    newJoke = "The rotation of Earth really makes my day";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 5) {
    newJoke = "Russian dolls are so full of themselves";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 6) {
    newJoke = "Atheism is a non-prophet organization";
  }

  // assigning a number and the joke together //
  else if (randomJokes == 7) {
    newJoke = "Blunt pencils are really pointless";
  }

  // changes the HTML <p> tag selected it with joke. //
  joke.innerHTML = newJoke;
});