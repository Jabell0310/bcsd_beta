1 > 3;
1 >= 3;
"A" < "a";
1 == "1";
null == undefined;
0 == false;
1 === "1";
null === undefined;
0 === false;
1 != "1";
1 !== "1";
console.log("Hello");
console.log(1 + 4, "Hi", true);
console.warn("Warning");
console.error("This is a error");
alert('You saw this before isn"t it');
let numberBox = prompt("Write number under the box");
numberBox;
numberBox + 1;
parseInt("101adfalkdf");
parseInt(numberBox) + 1;
let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5");
  console.log(random);
}
if (random >= 0.5) {
  console.log("Your number is greater than 0.5");
  console.log(random);
}
const yourAge = 21;
if (yourAge < 10 && yourAge >= 0) {
  console.log("Your age is under 10");
} else if (yourAge < 20 && yourAge >= 10) {
  console.log("Your are not an adult");
} else if (yourAge < 0) {
  console.error("Age error");
} else {
  console.log("You are adult now");
}

const id = prompt("아이디를 입력하시오");

if (id.length >= 4) {
  if (id.indexOf(" ") === -1) {
    console.log("Valid ID");
  } else {
    console.log("You should not use spacebar in your ID");
  }
} else {
  console.log("Your ID is too short");
}

false;
0;
("");
null;
undefined;
NaN;

const userInput = prompt("아무거나 입력하시오");
if (userInput) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}

const nameId = prompt("아이디를 입력하시오");
if (nameId.indexOf(" ") !== -1 || nameId.length <= 4) {
  console.log("Invalid ID");
} else {
  console.log("Valid ID");
}
!(1 === 1);
let firstName = prompt("Enter your first name");
if (!firstName) {
  prompt("Please enter your name");
}

const day = 1;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
  case 7:
    console.log("Weekends");
    break;
  default:
    console.log("I don't know that");
}
// 자바스크립트에서 연산을 하면 불리언 값으로 나온다.
// 문자열끼리 비교할 때는 유니코드 값으로 한다.
// 이중등호는 다른 타입끼리 비교할때 강제로 같은 타입으로 바꾸고 비교한다.
// 삼중등호가 우리가 흔히 생각하는 등호 역할을 한다.
// 같지않다고 표현할 때는 !=(이중등호) !==(삼중등호)로 표시한다.
// 출력에는 console.log console.warn console.error 3가지 종류가 있다.
// 그외에도 alert나 prompt를 쓰는 방법도 존재한다.
// parseInt는 문자열과 숫자열이 섞여있을때 숫자만 출력해준다.
// if문은 (조건) {출력} 형식으로 쓴다.
// 조건문은 if elseif(여러번) else 구조이다.
// nesting은 if else 조건문 안에 if else 조건문을 쓰는 것을 말한다.
// false null 0 공백 undefined NaN은 모두 falsy값을 갖고 그외에는 truthy값을 갖는다.
// &&은 and함수이고 ||은 or함수 !은 not함수인데 셋 모두 (조건)에 많이 쓰인다.
// if else조건문 말고도 switch조건문도 존재한다.
