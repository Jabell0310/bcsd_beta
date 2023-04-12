let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}
const secret = "jabell";

let guess = prompt("Enter your game id");
while (secret !== guess) {
  prompt("Enter your game id again");
}
console.log("You got it signin");

// while문은 변수를 먼저 지정하고 while (변수범위) {출력할 것 입력} 구조이다.
// while문의 장점은 지정하지 않았을 때 자동으로 계속 반복하는 것이다. 이때 더이상 반복하지 않으려면 break를 쓰면 된다.
