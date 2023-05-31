function callTwice(twocall) {
  twocall();
  twocall();
}
function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
callTwice(rollDice);

function callTentimes(tencall) {
  for (let i = 0; i < 10; i++) {
    tencall();
  }
}
callTentimes(rollDice);
// 고차함수는 함수의 매개변수 안에 함수를 넣어서 실행시키는 것을 의미한다.
function testYourFortune() {
  const ran_num = Math.random();
  if (ran_num > 0.5) {
    console.log("You win a game it's 100 million dollars");
  } else {
    while (ran_num <= 0.5) {
      alert("You lose a game so we hack your computer");
    }
  }
}
const fortuneTest = testYourFortune();
fortuneTest;

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);
isChild(2); //true
isAdult(18); //false
isSenior(78); // true
// 반환함수는 함수를 만든다음 변수를 지정하여 변수에 인수를 넣어서 함수를 실행시키는 것을 의미한다.
const Mathextension = {
  addition: function (x, y) {
    return x + y;
  },
  subtraction: function (x, y) {
    return x - y;
  },
  multiplication: function (x, y) {
    return x * y;
  },
  division: function (x, y) {
    return x / y;
  },
};
Mathextension.addition(3, 1);
// 모든 매서드는 함수에 해당하므로 변수와 객체를 만들어서 직접 매서드를 만들 수 있다.
