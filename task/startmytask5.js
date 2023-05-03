const $robotRock = document.querySelector("#robot-rock");
const $robotScissor = document.querySelector("#robot-scissor");
const $robotPaper = document.querySelector("#robot-paper");
const $userRock = document.querySelector("#user-rock");
const $userScissor = document.querySelector("#user-scissor");
const $userPaper = document.querySelector("#user-paper");
const buttonbox = document.querySelector("buttonbox");
const button = document.querySelector("button");

const addBtn = () => {
  location.replace("startmytask5.html");
};

function exposeRock() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    $robotPaper.style.backgroundColor = "black";
    alert("You lose");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 2) {
    $robotRock.style.backgroundColor = "black";
    alert("You draw");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 3) {
    $robotScissor.style.backgroundColor = "black";
    alert("You win");
    setTimeout(function () {
      addBtn();
    }, 1000);
  }
}

$userRock.addEventListener("click", exposeRock);

function exposeScissor() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    $robotRock.style.backgroundColor = "black";
    alert("You lose");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 2) {
    $robotScissor.style.backgroundColor = "black";
    alert("You draw");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 3) {
    robotpaper.style.backgroundColor = "black";
    alert("You win");
    setTimeout(function () {
      addBtn();
    }, 1000);
  }
}

$userScissor.addEventListener("click", exposeScissor);

function exposePaper() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    $robotScissor.style.backgroundColor = "black";
    alert("You lose");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 2) {
    $robotPaper.style.backgroundColor = "black";
    alert("You draw");
    setTimeout(function () {
      addBtn();
    }, 1000);
  } else if (random === 3) {
    $robotRock.style.backgroundColor = "black";
    alert("You win");
    setTimeout(function () {
      addBtn();
    }, 1000);
  }
}

$userPaper.addEventListener("click", exposePaper);
