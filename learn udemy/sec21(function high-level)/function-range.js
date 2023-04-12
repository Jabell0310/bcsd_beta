let itCompany = "Kakao";
function it() {
  itCompany = "Naver";
}
console.log(itCompany); //Kakao
it();
console.log(itCompany); //Naver
// 함수 업데이트는 함수 내부에 변수 선언 없이 해당 변수와 업데이트 내용을 넣고 함수를 실행하고 외부에 출력코드를 입력하면 업데이트가 가능하다.
const nintendoGame = "Zelda";
function nintendo() {
  const nintendoGame = "Mario";
  console.log(nintendoGame); //Mario
}
nintendo();
console.log(nintendoGame); //Zelda
// 이렇게 변수선언이 함수 내부에 있고 출력창도 함수 내부에 있으면 Mario가 출력되고 출력창이 함수 외부에 있으면 Zelda가 출력된다.
for (var i = 0; i < 5; i++) {
  var msg = "이 코드가 실행이 어떻게 될까요?";
  console.log(msg);
}
console.log(msg);
console.log(i);
// 함수 내부에는 출력을 실행하려면 함수내부에 console.log를 입력해야한다. 그렇지 않으면 블록처리가 되어 코드가 실행하지 않는다.
// 그러나 const let이랑 달리 var은 함수외부에 console.log를 입력해도 실행이 되는데 이유는 블록처리를 하지 않기 때문이다.
// 더 희한한 점은 var은 카운터 변수도 블록처리를 안하고 엑세스를 한다는 점이다.
function generation1th() {
  const kingName = ["마태수", "지공섭", "왕석두", "곽지창"];
  const kingRegion = ["안산", "대구", "수원", "충청"];
  function introduce() {
    console.log(`1세대 ${kingRegion[0]}의 왕 ${kingName[0]}`);
    console.log(`1세대 ${kingRegion[1]}의 왕 ${kingName[1]}`);
    console.log(`1세대 ${kingRegion[2]}의 왕 ${kingName[2]}`);
    console.log(`1세대 ${kingRegion[3]}의 왕 ${kingName[3]}`);
  }
  introduce();
}
generation1th();
// 랙시컬 범위는 부모 함수안에 자식함수나 for문 같은 것이 있을 때 부모함수읮 정보를 자식함수가 엑세스할 수 있고 자식함수의 정보를 부모함수가 엑세스할 수 없다는 범위를 규정한 것이다.
const index = function (x, y) {
  return Math.pow(x, y);
};
index(2, 3);
// 변수 이름을 함수와 같다고 표현할 수도 있다.(그러면 함수 이름을 지정했을 때보다 코드가 간결해진다.)
