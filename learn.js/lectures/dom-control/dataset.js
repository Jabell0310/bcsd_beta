let h2 = document.querySelector('h2');
h2.dataset.test = 'hello Javascript';
console.log('h2.dataset.test: ', h2.dataset.test);
// html data-데이터 이름인 형태를 js에서 dataset.데이터이름으로 불러 출력하는 코드이다.

let img = document.querySelector('img')
let lilist = document.querySelectorAll('li');
let selectedItem = document.querySelector('.selected-item');
// html 태그 요소와 id를 query로 js에서 불러오는 역할을 한다.

lilist[0].addEventListener('click', function (event) {
  selectedItem.textContent= event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});
lilist[1].addEventListener('click', function (event) {
  selectedItem.textContent= event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});
lilist[2].addEventListener('click', function (event) {
  selectedItem.textContent= event.target.textContent;
  img.setAttribute('src', event.target.dataset.img);
});
// 변수 lilist의 0,1,2번쨰 열에서 이벤트를 추가할 것인데 클릭을 하면 변수 selectedItem의 textcontent를 클릭한 target의 textcontent로 바꾸는 코드이다.
