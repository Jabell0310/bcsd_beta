class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="jabell" from="mavern" bangs={4} />
        <Hello to="Jack" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// props는 구성요소를 맞춤형으로 만들 수 있는 특징이 있다.
// props를 통해서 데이터를 전송하기 쉽다는 것이다. 구성요소를 생성하는 곳에 가서 구성요소에 데이터를 넘기면 되기 때문이다.
// 데이터가 통과하게 경로를 지정하는 역할을 하는 것이 props이다.
// props는 일반적으로 문자열 데이터를 지정하는데 그 외에 숫자 불리언 등의 데이터는 {}로 하여 Javascript 형태로 지정할 수 있다.
