let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');

btn1.onclick = function() {
  alert('hello 프로퍼티 리스너');
};

btn2.addEventListener('click', helloEvent1);
function helloEvent1() {
  alert('addEventListener 1');
}

btn2.addEventListener('click', function () {
  alert('addEventListener 2');
});
// 이벤트를 등록할 때는 addEventListener로 이벤트를 등록할 수 있다. btn1처럼 함수이름을 만들어서 넣을 수도 있고 btn2처럼 함수만 설정하고 그 안에다가 script 코드를 넣을 수도 있다.  이벤트 등록 코드들의 공통부분이 많다면 따로 맨 위 처럼 따로 함수를 만들어서 적용해야 효율적인 코드를 짤 수 있다.
btn2.removeEventListener('click', helloEvent1);
// 등록된 이벤트를 제거하는 것을 말한다.