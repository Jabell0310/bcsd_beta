//  1) get 매서드
document.getElementById('title');
console.log(title);
title.textContent = '삼국시대 대표적 국가'
// get 매서드에서 id에 있는 요소를 가져오고 싶을 때 쓰는 태그이다.
let items = document.getElementsByClassName('item');
console.log(items);
// get 매서드에서 class에 있는 요소를 가져오고 싶을 때 쓰는 태그이다..
console.log('고구려: ', items[0]);
console.log('백제: ', items[1]);
console.log('신라: ', items[2]);
// 특정 html요소를 console화면에 가져오고 싶을때는 특정 요소에 지정된 id나 class값이라면 몇번쨰에 해당하는지 쓸 것!(이때 첫번쨰 코드는 0으로 시작된다.)
let LiList = document.getElementsByTagName('li');
console.log(LiList);
//  2) HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2: ', h2);
//  이것도 특정 HTML요소를 console화면에 가져오고 싶을때 쓰는 태그인데 get이랑 다른점은 get은 console화면에 id나 class가 속한 태그만 보여주지만 querry는 id나 class가 속한 태그에 있는 문장 전체를 보여준다.
let item = document.querySelector('.item');
console.log('querry item: ', item);
// 또 querrySelector는 기본적으로 하나의 태그만 조회하므로 일치하는 element종류가 여러개 있으면 첫번째 것을 가져온다.
// element종류를 모두 가져오고 싶을때는 querySelectorAll을 해주면 된다.
let itemall = document.querySelectorAll('.item');
console.log('itemall: ', itemall);
console.log('itemall[0]: ', itemall[0]);
console.log('itemall[1]: ', itemall[1]);
console.log('itemall[2]: ', itemall[2]);
//또 get매서드에서와 마찬가지로 특정태그를 가져오는 것도 가능하다.
/*h2.textContent = '<span>역사!</span>';*/
//textContent는 h2에 있는 태그를 모두 제거하고 순수한 텍스트만을 주므로 브라우저에 <span>역사!</span>이라고 나타난다.
/*h2.innerHTML = '<span>삼국시대!!!!</span>';*/
//textHTML은 h2에 있는 태그를 모두 제거하고 새로운 html태그를 그대로 제공하므로 브라우저에 삼국시대!!!!이 구현된다.
//단, textContent와 innerHTML은 기존의 태그를 모두 지우므로 주의해서 써야한다.(특히 body에다가 쓸 때는 모든 태그를 지우면 골치가 많이 아프겠지..)

let input = document.querySelector('input');
input.setAttribute('placeholder', '삼국 시대의 국가를 선택해주세요!')
// 속성값을 바꿀 떄 내장함수에다가 내장함수 태그종류와 바꿀 정보를 입력하면 된다.
input.removeAttribute('placeholder');
// 속성값을 지울때는 이 코드를 입력하면 바로 지워진다.
let helloItem = document.querySelector('.hello');
console.log('helloItem: ', helloItem);
/*helloItem.style.color = 'blue';
helloItem.style.backgroundColor = 'black';*/
//요소 프로퍼티를 직접 수정하여 CSS의 스타일링을 적용할 수 있다.
helloItem.classList.add('dark');
//js에서 css태그를 html에 적용할때는 이렇게 사용한다. 또 css태그를 2개이상 부르고 싶을때는 내장함수에 ('css태그' ,'css태그')형태로 쓸 것!
