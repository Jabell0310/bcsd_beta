function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your Number is {num}</h1>
        <p>{num === 7 ? "Lucky Number" : "Unlucky Number"}</p>
        {num === 7 && (
          <img src="https://thumbs.gfycat.com/InexperiencedNextGosling-size_restricted.gif" />
        )}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.getElementById("root"));
// JSX에서 조건문을 사용하는 대표적인 3가지 방식이 있는데
// 1.삼항연산자를 사용한다. 이 경우는 작은 텍스트 조각을 처리할 때 많이 사용된다.
// 2.부울은 삼항연산자가 참일 때 가정하여 다른 조건도 실행할 일이 있을 때 사용된다.
// 3.또 변수를 지정(let으로)하여 if와 else문을 통해서 조건문이 실행되는 것도 나타낼 수 있다.
