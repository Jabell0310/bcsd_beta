let rectangle = document.querySelector('#rectangle');

rectangle.addEventListener('mousedown', function (event) {
// console.log('mousedown')
  console.log('clientX: ',event.clientX,'clientY: ',event.clientY)
  console.log('pageX: ',event.pageX,'pageY: ',event.pageY)
})

body.addEventListener('click', function(event) {
  console.log('pageX: ',event.pageX,'pageY: ',event.pageY)
  let div = document.createElement('div')
  div.classList.add('circle')
  div.style.left = event.pageX = 'px'
  div.style.top = event.pageY = 'px'
  body.appendchild(div)
})
// mousedown은 css스타일이 적용된 box를 마우스로 누를 때 개발자도구의 console화면에서 자바스크립트 코드가 시행되는 코드이다.
// mousedown의 특성에 event.clientx와 event.clienty 적용하면 마우스를 클릭했을 때 클릭한 부분의 x와 y좌표가 나타난다. 좌측상단 기준으로 오른쪽으로 갈수록 x값이 커지고, 아래쪽으로 갈수록 y값이 커진다.
// mousedown의 특성에 event.pagex와 event.pagey 적용하면 마우스를 클릭했을 때 클릭한 부분의 x와 y좌표가 나타나는데 이때 clientx와 clienty의 차이는 스크롤바가 생길 때 나타나는데 client는 브라우저에 나타나는 뷰포트를 기준으로 x,y좌표를 설정하는 반면 page는 전체 웹페이지를 기준으로 x,y좌표를 설정한다.
rectangle.addEventListener('mouseup', function(event) {
  console.log('mouseup')
})
// mouseup은 css스타일이 적용된 box를 마우스로 누르고 해제될 때 개발자도구의 console화면에서 자바스크립트 코드가 시행되는 코드이다.
rectangle.addEventListener('mouseenter', function(event) {
  console.log('mouseenter')
})
// mouseenter는 css스타일이 적용된 box에 마우스가 진입했을 떄 개발자도구의 console화면에서 자바스크립트 코드가 시행되는 코드이다.
rectangle.addEventListener('mouseleave', function(event) {
  console.log('mouseleave')
})
// mouseleave는 css스타일이 적용된 box에 마우스가 진입하고 다시 벗어날 때 개발자도구의 console화면에서 자바스크립트 코드가 시행되는 코드이다.
rectangle.addEventListener('mousemove', function(event) {
  console.log('mousemove')
})
// mousemove는 css스타일이 적용된 box내부에서 마우스가 움직이고 있을 때 개발자도구의 console화면에서 자바스크립트 코드가 시행되는 코드이다.