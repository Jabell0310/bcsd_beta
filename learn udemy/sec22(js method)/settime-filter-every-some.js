console.log("Hi");
setTimeout(() => {
  console.log("Are you still there???");
}, 5000);
setTimeout(() => {
  console.log(`If you don't quit I will close your console`);
}, 7000);
const timer = setInterval(() => {
  var timer = "Time is going";
  console.log(timer);
}, 1000);
clearInterval(timer);
function checkIdLength(id) {
  let idchecking = id.filter(function (id_len) {
    return id_len.length >= 8 && id_len.length <= 18;
  });
  return idchecking;
}
checkIdLength([
  "jabell0310",
  "king_wang_gamja",
  "mavern",
  "yooma03",
  "backsuengmin20031230",
]);
function bewteen0to100(num) {
  let num_check = num.every((number) => number >= 0 && number <= 100);
  return num_check;
}
function notbewteen0to100(num) {
  let num_check = num.some((number) => number < 0 || number > 100);
  return num_check;
}
// setTimeout은 일정시간이 지나고 코드가 실행되는 메서드이다.
// setInterval은 일정간격마다 코드가 실행되는 메서드이다.
// 필터는 배열을 넣었을 때 조건을 만족시키는 컨텐츠만 true값으로 인식하여 실행하는 메서드이다.
// every는 배열안에 조건을 만족시키는 컨텐츠가 모두 존재할 때 true값으로 인식하는 메서드이다.
// some은 조건을 만족시키는 컨텐츠가 하나라도 존재한다면 true값으로 인식하는 메서드이다.
