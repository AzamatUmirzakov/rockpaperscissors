let content = document.querySelector("div.content");

let step = document.querySelector("span").offsetHeight + 15;

for (let div of Array.from(content.querySelectorAll("div"))) {
  div.style.maxHeight = step + "px";
}

function change(who, choice) {
  let ul = null;
  if (who == "user") {
    ul = document.querySelector("ul.user-slider-items");
  } else {
    ul = document.querySelector("ul.comp-slider-items");
  }
  if (choice == "rock") {
    ul.style.marginTop = -step * 2 - 20 + "px";
  } else if (choice == "paper") {
    ul.style.marginTop = -step * 3 - 30 + "px";
  } else {
    ul.style.marginTop = -step - 20 + "px";
  }
}

function round(userChoice) {
  let result = null;
  let options = ["rock", "paper", "scissors"];
  let compChoice = options[Math.floor(Math.random() * options.length)];
  change("user", userChoice);
  change("comp", compChoice);
  if (
    (userChoice == "paper" && compChoice == "rock") ||
    (userChoice == "rock" && compChoice == "scissors") ||
    (userChoice == "scissors" && compChoice == "paper")
  ) {
    result = "user";
    document.querySelector("p.user-score").innerHTML =
      parseInt(document.querySelector("p.user-score").innerHTML) + 1;
    document.querySelector("div.user > p").style.borderBottomColor = "black";
    setTimeout(
      () =>
        (document.querySelector("div.user > p").style.borderBottomColor =
          "transparent"),
      1000
    );
  } else if (userChoice == compChoice) {
    result = "draw";
  } else {
    result = "computer";
    document.querySelector("p.computer-score").innerHTML =
      parseInt(document.querySelector("p.computer-score").innerHTML) + 1;
    document.querySelector("div.computer > p").style.borderBottomColor =
      "black";
    setTimeout(
      () =>
        (document.querySelector("div.computer > p").style.borderBottomColor =
          "transparent"),
      1000
    );
  }
  return result;
}

let chooseButtons = document.querySelector("div.choose-buttons");

function handler(event) {
  if (event.target.tagName != "BUTTON") {
    return false;
  }
  document
    .querySelector("div.choose-buttons")
    .removeEventListener("click", handler);
  let result = round(event.target.dataset.type);
  setTimeout(() => {
    document.querySelector("ul.comp-slider-items").style.marginTop = 0 + "px";
    document.querySelector("ul.user-slider-items").style.marginTop = 0 + "px";
    document
      .querySelector("div.choose-buttons")
      .addEventListener("click", handler);
  }, 1000);
}

document.querySelector("div.choose-buttons").addEventListener("click", handler);

console.log(navigator.userAgent);
