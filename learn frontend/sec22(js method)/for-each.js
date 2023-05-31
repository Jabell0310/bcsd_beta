const num20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
num20.forEach(function (get5) {
  if (get5 % 5 === 0) {
    console.log(get5);
  }
});
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

universityClass.forEach(function (schoolClass) {
  console.log(
    `${schoolClass.title} class satisfication rate is ${schoolClass.contentRate}/5`
  );
});
universityClass.map(function (schoolClass) {
  return schoolClass.title.toUpperCase();
});
const university = universityClass.map((schoolClass) => {
  return `${schoolClass.title}----${schoolClass.contentRate / 5}`;
});
university;
// foreach 메서드는 배열안의 아이템(컨텐츠) 각각에 대해 함수와 코드를 한번씩 시행하는 것으로 for of가 등장하기 전까지 많이 쓰였다.
// map 매서드는 배열안의 아이템을 시행한다는 점에서 foreach와 비슷하나 return으로 반환하기 때문에 또 새로운 배열이 생성된다.
// arrow 함수는 복잡해보이는 함수를 =>를 이용하여 간단하게 처리시키는 함수이다. 위의 map이랑 아래 map을 비교하면 더 간결한 것을 확인할 수 있다.
