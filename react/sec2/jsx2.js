function getMood() {
  const moods = ["Angry", "Hungry", "Silly", "Quiet", "Paranoid"];
  return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Current mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
// {}는 html코드 안에 Javascript를 넣을 수 있는 것으로 이 처리를 해주면 새로고침할 때마다 동적으로 요소를 바꿔주는 역할을 한다.
// Javascript가 되는것은 {}안의 코드가 JSX를 빠져나간다는 의미를 지니기 때문이다.
