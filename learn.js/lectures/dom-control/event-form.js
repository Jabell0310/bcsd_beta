let inputBox = document.querySelector('#input-box')
let img = document.querySelector('img')
inputBox.addEventListener('keypress', function (event) {
  console.log('keypress')
})
// keypress는 웹에 키보드 입력시 js코드가 실행되어 개발자 도구 console화면에 keypress라는 문구가 출력되는 코드이다.
inputBox.addEventListener('keydown', function (event) {
  console.log('keydown')
})
// keydown은 웹에 키보드를 누른 상태일 때 js코드가 실행되어 개발자 도구 console화면에 keydown이라는 문구와 누르는 시간까지 출력되는 코드이다.
inputBox.addEventListener('keyup', function (event) {
  console.log('keyup')
})
// keyup은 웹에서 키보들르 눌렀다가 떼면 js코드가 실행되어 개발자 도구 console화면에 keyup이라는 문구가 출력되는 코드이다.
inputBox.addEventListener('keyup', function (event) {
  console.log('event.key', event.key)
  console.log('event.keyCode', event.keyCode)
})
//  event.key는 입력한 키의 정보를 event.keyCode는 입력한 키의 아스키 코드를 개발자 도구 console화면에 출력되는 코드이다.
/*inputBox.addEventListener('focus', function(event) {
  alert('focus')
})*/
// focus는 웹에서 특정 요소(textbox)같은 것을 클릭했을때 js코드가 실행되어 웹 브라우저에 경고창이 출력되는 코드이다.
/*inputBox.addEventListener('blur', function(event) {
  alert('blur')
})*/
//  blur는 웹에서 특정요소(textbox)를 focus한 상태를 벗어났을 때 (다른 부분을 클릭해서라던지) js코드가 실행되어 웹 브라우저에 경고창이 출력되는 코드이다.
inputBox.addEventListener('change', function(event) {
  console.log('change')
})
//  input태그의 value값이 변경되었을 때(textbox에 text를 입력하고 enter키를 눌렀을때) js코드가 실행되어 개발자 도구 console화면에 출력되는 코드이다.
img.addEventListener('error', function (event) {
  console.log('error')
  event.target.src = '../image/apple.jpg'
})