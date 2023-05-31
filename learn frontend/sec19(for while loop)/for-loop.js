for (let num = 1; num <= 20; num++) {
  console.log(`Hey this is ${num} line`);
}
for (let even = 40; even >= 1; even -= 2) {
  console.log(even);
}
const pizzaStore = [
  "Mr.Pizza",
  "59Pizza",
  "Papajohns",
  "Dominopizza",
  "Pizzahot",
];
for (let pizza = 0; pizza < pizzaStore.length; pizza++) {
  console.log(pizza + 1, pizzaStore[pizza]);
}
for (let x = 1; x <= 10; x++) {
  console.log("x값: ", x);
  for (let y = 3; y > 0; y--) {
    console.log("y값: ", y);
  }
}
const generation = [
  ["Kimkarpryoung", "Choidongsu", "Parkjinyoung", "Leedogyu"],
  ["Leejihun", "Guakjichang", "Mataesu", "Jigongseop", "Wangseokdu"],
  ["Parkhyeongseok", "Kimkimyeong", "Seongyohan", "Seoseongyun", "Janghyun"],
];
for (
  let mainCharacter = 0;
  mainCharacter < generation.length;
  mainCharacter++
) {
  const row = generation[mainCharacter];
  console.log(`${mainCharacter}-generation`);
  for (
    let mainCharacterName = 0;
    mainCharacterName < row.length;
    mainCharacterName++
  )
    console.log(row[mainCharacterName]);
}
for (let mainCharacter of generation) {
  for (let mainCharacterName of mainCharacter) {
    console.log(mainCharacterName);
  }
}
const rateOfMBTI = {
  INFP: 13.39,
  ENFP: 12.6,
  ESFJ: 8.35,
  ISFJ: 7.66,
  ISFP: 6.61,
  ESFP: 6.36,
  INTP: 6.28,
  INFJ: 6.25,
  ENFJ: 6.09,
  ENTP: 5.04,
  ESTJ: 4.56,
  ISTJ: 4.28,
  INTJ: 3.75,
  ISTP: 3.11,
  ESTP: 2.94,
  ENTJ: 2.73,
};
for (let typeOfMBTI in rateOfMBTI) {
  console.log(typeOfMBTI, " rate is ", rateOfMBTI[typeOfMBTI], "%");
}
Object.keys(rateOfMBTI);
Object.values(rateOfMBTI);
Object.entries(rateOfMBTI);
let sigmaPercent = 0;
for (let sigmaOfMBTI of Object.values(rateOfMBTI)) {
  sigmaPercent += sigmaOfMBTI;
}
const avgThisObject = {
  Kim: 175,
  Lee: 180,
  Lim: 178,
  Park: 193,
  Yoo: 163,
};
let height = 0;
let heightavg = Object.values(avgThisObject);
for (let calcAvg of heightavg) {
  height += calcAvg;
}
console.log(height / heightavg.length);
// for문은 (let 변수 = 시작숫자; 변수범위 지정; 더하거나 빼기) {출력} 형태이다.
// for문에 배열도 직접 출력할 수 있다. (이때 배열이름[변수이름]을 넣으면 컨텐츠가 출력된다.)
// for문안에 for문을 넣는 nesting이 가능하다.
// 배열의 컨텐츠를 정렬할 때 가독성을 높이기 위해서 for of문을 사용한다.
// for in문은 객체에 있는 key값을 조회하고 객체의 왼쪽부분은 키 오른쪽부분은 value 열은 entries라고 한다.
// 객체에 있는 숫자를 연산할때는 변수를 2,3개 지정하고 변수끼리 연산을 한다.
