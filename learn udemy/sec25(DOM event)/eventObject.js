document.querySelector("button").addEventListener("click", function (e) {
  console.log(e);
});
// 매개변수를 입력하고 이 매개변수를 출력하는 과정을 통해서 이벤트 객체가 생성하는 원리를 알 수 있다.
// eventHandler에서 클릭(이벤트 발생)을 하면 이벤트 객체가 생성되는데 매개변수를 통해서 이 값을 확인할 수 있다.
/*const input = document.querySelector("input");
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});*/
// 키보드 이벤트는 keydown과 keyup 두가지가 있으며 keydown은 키보드를 누른 상태에서 keyup은 키보드를 뗸 상태에서 생성된다.
// keyboard이벤트 사용할 때는 종종 이벤트 객체를 많이 사용한다.
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("Up!");
      break;
    case "ArrowDown":
      console.log("Down!");
      break;
    case "ArrowLeft":
      console.log("Left!");
      break;
    case "ArrowRight":
      console.log("Right!");
      break;
    default:
      console.log("Ignored");
  }
});
// 이런식으로 switch문을 통해 keycode가 콘솔에 출력되는 양식을 바꿀 수 있다.
// 대표적인 방식이 if문이나 case문이다.
