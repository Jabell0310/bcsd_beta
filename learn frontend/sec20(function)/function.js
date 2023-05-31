function lyrics() {
  console.log("그러다 밤이 찾아오면 우리 둘만의 비밀을 새겨요.");
  console.log("추억할 그 밤위에 갈피를 꽃고 선 남몰래 펼쳐보아요");
}
lyrics();
function userGreet(userId) {
  console.log(`Hi ${userId}, welcome to our website!`);
}
userGreet("jabell0310");
function rollDice(firstDice, secondDice) {
  if (firstDice > 6 || firstDice < 1 || secondDice > 6 || secondDice < 1) {
    console.error("The number should be between 1~6");
  } else if (firstDice === secondDice) {
    console.log("Wow, you can roll dice again");
  } else {
    console.log("Okay, give it to a next person");
  }
}
rollDice(1, 1);
function add(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
}
function sub(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  } else if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
}
function mul(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x * y;
  } else if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
}
function div(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x / y;
  } else if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
}
function ind(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x ** y;
  } else if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
}
// 함수는 선언문과 실행문 2가지로 나뉘는데 선언문은 콜백함수로 만들어서 선언하고 함수이름을 적어서 실행한다.
// 함수선언문의 괄호에는 매개변수를 실행문에는 인수를 넣어서 사용자가 지정한 값을 함수가 실행시킬 수 있다.
// 함수는 매개변수와 인수를 여러개 지정할 수 있으며 여러개 지정할 때 매개변수와 인수으 수가 일치하지 않으면 실행이 되지 않는다.
// 함수의 return값은 console.log처럼 출력도 할 수 있고 console.log가 역할을 하지 못하는 캡쳐도 할 수 있지만 함수 내부에 if else문을 집어넣지 않는 이상 한번밖에 사용이 불가능하다.
