const myBestFriend = {
  name: "Juhajin",
  school: "SeoulUniversity",
  age: 21,
  major: "Politics",
  hisWord() {
    console.log("This:", this);
    console.log(`${this.name}: 7ㅔ0ㅣ0ㅑ.., 좋노~, ㅗㅗㅗㅗㅗ, 어쩔티비, 오빠`);
  },
};
const hisWord2 = myBestFriend.hisWord;
myBestFriend.hisWord();
hisWord2();
// 언뜻 보기에 같아보여도 출력값에서 차이가 생기는데 this메서드 때문이다,
/* 이 메서드는 배열이나 함수 안에서 쓸 수 있는데 이때 this는 배열, 함수 이름을 지칭한다. 
여기서 this는 배열을 지칭하고 hisword2는 this가 내장되어있지 않기 때문에 배열 정보가 엑세스 되지 않는다.*/
// hisWord2에서 실행되는 this는 window객체로 자바스크립트 최상위 객체이다.
// 결론은 hisword는 .기준 왼쪽에 myBestFriend가 가리키므로 배열이 실행된거고 hisWord2는 .기준 왼쪽에 아무것도 가리키지 않으므로 window객체가 실행되었다.
function say(msg) {
  try {
    console.log(msg.toUpperCase().repeat(2));
  } catch (issue) {
    console.log(issue);
    console.log("똑바로 코드 안짜냐??");
  }
}
// try는 오류가 생기는 코드를 집어넣으면 catch는 오류가 생기는 이유를 잡아주는 매서드이다.
