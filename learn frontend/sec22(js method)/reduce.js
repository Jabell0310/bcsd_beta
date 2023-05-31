const Fibonacci_numbers = [1, 1, 2, 3, 5, 8, 13, 21];
Fibonacci_numbers.reduce((sigmanum, plusnum) => {
  return sigmanum + plusnum;
});
// reduce 함수의 기본구조를 이렇게 이해하면 좋다. 배열의 컨텐츠를 인수 2개를 이용해 줄여나가는데 첫번째 인수는 배열 이전에 지나쳤던 배열에 대해 두번째 인수는 현재 처리할 배열에 관해 처리한다.
const findMin = [123, 18234, 888, 9834, 2049, 21];
findMin.reduce((min, num) => {
  if (num < min) {
    return num;
  }
  return min;
});
const findMax = [123, 18234, 888, 9834, 2049, 21];
findMax.reduce((max, num) => {
  if (num > max) {
    return num;
  }
  return max;
});
// reduce함수를 이용해 min과 max 찾기도 하는데 두번째 인수가 컨텐츠를 탐색하면 첫번쨰 인수로 계속 누적되는데 이 과정을 첫번쨰 컨텐츠부터 마지막 컨텐츠까지 컨텐츠 수를 줄여가면서 처리하기 때문에 reduce라 부른다.
// 이 함수를 해석하면 현재 num에 있는 컨텐츠가 이전 컨텐츠의 max보다 크거나 min보다 작다면 num으로 결과값을 돌리고 아니면 min max값으로 출력하는데 이 과정을 첫 컨텐츠부터 끝 컨텐츠까지 비교하라는 의미이다.
