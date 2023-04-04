console.log ('Hello Javascript!')
//alert('Hello Javascript!')
// 자바스크립트의 대표적인 두 실행태그로 console.log는 변수나 함수,객체 이벤트 등을 실행하고 alert는 
let str = 'Hello Javascript!';
console.log('문자열: ', str);
let number = 30;
console.log('number: ', number);
// 변수를 불러오는 것과 시행하는 것을 알아보기 위해서 만든 코드이다.
function sayHello() {
  console.log('Hello1');
  console.log('Hello2');
  console.log('Hello3');
}

sayHello();
// 함수를 불러오는 것과 시행하는 것을 알아보기 위해서 만든 코드이다.
let obj = {
  number: 30,
  sayHello: function () {
    console.log('objHello1');
    console.log('objHello2');
    console.log('objHello3');
  },
}; 

console.log(obj.number);
obj.sayHello();
// 객체를 불러오는 것과 시행하는 것을 알아보기 위해서 만든 코드이다.