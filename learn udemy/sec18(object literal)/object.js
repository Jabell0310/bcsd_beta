const taejunPark = {
  name: "Parktaejun",
  age: 40,
  job: "Webtoon cartoonist",
  his_work: ["Lookism", "How to fight", "Mr.Kim"],
  country: "SouthKorea",
  1984: "His Birthyear",
};
taejunPark.name;
taejunPark["age"];
taejunPark["1984"];
taejunPark[1984];
taejunPark["his" + "_work"];
taejunPark.hisgoal;
job[hisgoal];
hisgoal;
taejunPark.age = 38;
taejunPark.company = "Gangnam Sinsa";
// 객체는 {} 안에 정보이름: 정보(문자열,배열,숫자) 등으로 구성되는 구조이다.
// 객체에서 특정정보를 불러올때는 .정보이름 또는 ['정보이름'] 2가지가 있다.
// 객체에서 []로 불러들일때는 문자열로 해야한다. 이 문자열이 정보를 보여주는 키 역할을 한다. 그냥 입력하면 변수취급을 한다.
// 물론 숫자열은 그냥 입력해도 문자열로 바꿔서 처리한다.
// 문자열끼리 합쳐도 키가 만들어지는 것이 가능하다.
// 객체에서 변수를 추가할 때는 .변수이름으로는 불가능하다 하지만 [변수이름]으로는 변수추가가 가능하다.
// 객체는 특정 정보입력을 하고 정보를 바꾸는 방식으로 수정이 가능하다.
// 또 새로운 정보를 추가할 떄는 .추가할정보이름 = '새로운 정보'로 추가하는 것이 가능하다.
