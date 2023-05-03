function getBasicDoubleDefault(a, b = 2) {
  /* if (b === undefined) {
    b=2
  } */
  return a * b;
}
getBasicDoubleDefault(2);
getBasicDoubleDefault(2, 3);
function greetUser(
  username,
  msg = `You are login this server Enjoy our game`,
  punc = `!`
) {
  console.log(`${username}, ${msg}${punc}`);
}
greetUser("jabell0310");
greetUser("mavern", "Hello", "!!!");
// 매개변수에 기본값을 설정하여 인수를 입력하지 않았을 때 함수를 실행시킬 수 있다.
// 원래는 위의 주석에 있는 if문을 써야했지만 최근에는 디폴트 값만 적어도 인식을 할 수 있게 바뀌었다.
const nums = [1, 2, 31, 44, 512, 62];
console.log(nums);
console.log(...nums);
Math.max(...nums);
console.log("hello");
console.log(..."hello");
// spread는 배열내부에 있는 속성들을 console창에 하나 하나 정렬시키는 구문으로 이 말을 전개를 해서 펼친다고 한다. ...을 통해서 구현된다.
// 심지어 문자열도 문자열 내에 있는 글자 하나 하나 정렬시키는 역할을 한다.
const under5Number = [1, 2, 3, 4, 5];
const between6to10Number = [6, 7, 8, 9, 10];
const count10 = [...under5Number, ...between6to10Number];
// 배열 내부에 있는 속성들끼리 합칠 때도 spread구문이 이용된다.
const jannabi1stElbum = {
  name: "monkey_hotel",
  mainsong: "hot_summer_is_gone_and_there_is_no_remain",
  songnumber: 10,
  release_year: 2016,
};
const jannabi2ndElbum = {
  name: "legend",
  mainsong: "for_the_couple_who_hesistate",
  songnumber: 12,
  release_year: 2019,
};
const jannabi3rdElbum = {
  name: "the_land_of_fantasy",
  mainsong: "remote_island_romantic",
  songnumber: 13,
  release_year: 2021,
};
const jannabiBigElbum = {
  ...jannabi1stElbum,
  ...jannabi2ndElbum,
  ...jannabi3rdElbum,
};
// 객체는 속성이 중복되면 spread구문으로 합쳤을 때 중첩이 일어나므로 조심해야한다. 중첩이 일어날 때는 가장 나중에 기록한 정보를 토대로 저장된다.
const update1thElbum = { ...jannabi1stElbum, songLength: "29:24" };
const update2ndElbum = { ...jannabi2ndElbum, songLength: "46:47" };
const update3rdElbum = { ...jannabi3rdElbum, songLength: "39:53" };
// spread를 사용해서 짧은 구문으로 업데이트 가능하다!
const evenNumber = { ...[2, 4, 6, 8, 10] };
// {0:2, 1:4, 2:6, 3:8, 4:10} 이렇게 자동으로 전개를 해서 객체가 만들어지기도 한다.
// spread구문은 객체를 변형하지 않고 복사할 때 사용하는 구문이다.
function sum(...numbers) {
  console.log(numbers);
  return numbers.reduce((total, el) => total + el);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// 함수 내부에 있는 매개변수는 배열이 아니므로 reduce 매서드를 쓸 수 없다
// rest 매개변수는 매개변수자리에 원래 매개변수 수만큼 인수가 와야되지만 spread구문 처리를 하면 결과에 배열 처리를 해준다.
// 이 특성으로 인해 하나의 매개변수에 여러개의 인수가 와도 된다.그리고 배열로 바뀌기 때문에 reduce매서드가 쓰인다.
function results(first, second, third, ...remain) {
  console.log(`축하합니다! ${first}, 1위하셨습니다!`);
  console.log(`${second},2위하셨습니다!`);
  console.log(`${third},3위하셨습니다!`);
  console.log(`${remain} 모두 수고 많으셨습니다!`);
}
results("Jack", "Elvis", "Tom", "Karson", "Ned", "Danny");
const scoreResults = [990, 890, 840, 800, 780, 750];
const showRank = ([gold, silver, bronze, ...nothing] = scoreResults);
// 배열분해는 특정 속성에 변수값을 지정하고 남은 정보에 변수를 지정할 필요가 없을 때 spread의 특성을 이용해서 쓰는 배열이다.
// 그럼 지정된 변수와 지정되지 않는 변수로 속성들이 부여되면서 분해가 되는 방식이다.
const jannabi2022 = {
  song1th: "ladybird",
  song2nd: "we_seized_green",
  song3rd: "summer_fall_winter_spring",
  song4th: "bye_sad_feeling",
};
const { song1th: music1th } = jannabi2022;
// 객체 분해는 객체에서 원하는 key를 가져오고 싶을 때 쓰인다. 또 key 값을 변경시킬 때는 원래 key: 변경시킬 key를 입력시킨다.
// 객체에서 없는 key를 입력하면 undefined라고 뜨고 또 디폴트 값을 입력할 수 있다. 하지만 key:value가 있는 구조에는 디폴트값이 적용되지 않는다.
const universityClass = [
  {
    title: "Physics",
    contentRate: 3,
  },
  {
    title: "Math",
    contentRate: 5,
  },
  {
    title: "Computer",
    contentRate: 4.5,
  },
  {
    title: "Psychology",
    contentRate: 2.5,
  },
  {
    title: "Gettingjob",
    contentRate: 5,
  },
];
universityClass.map(({ title, contentRate }) => {
  return `${title} Class is rated ${contentRate}/5`;
});
// 매개변수 분해는 배개변수 자리 안에 배열과 매개변수 명을 넣어서 각각의 객체를 분해하는 것으로 이러면 매서드 형식으로 안 써도 된다.
// 즉 universityClass.title 매서드를 안 써도 매개변수 분해를 통해 축약이 가능하다.
