class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <NumPicker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// 적용해야 할 구성요소가 많을 때는 여러가지 구성요소를 렌더링 함수안에 넣어서 구현할 수 있다.
// 이때는 HTML태그에 구현해야할 JS파일들을 모두 불러오고 가장 아래에 구현할 구성요소들이 담긴 파일들을 불러와야한다.
