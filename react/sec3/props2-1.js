class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    const colors = { fontSize: "50px", backgroundColor: "purple" };
    return (
      <div className="Machine">
        <p style={colors}>
          {s1} {s2} {s3}
        </p>
        <p className={winner ? "win" : "lose"}>
          {winner ? "Winner!" : "Loser!"}
        </p>
      </div>
    );
  }
}

// this.props에서 추출한 3가지 다른 변수를 기반으로 이 winner 부울을 변수에 따라서 계산할 수 있다.
// React에서 css를 적용하려면 만든 HTML요소에다가 class가 아닌 className을 써야한다.
// className으로 하는 이유는 react 대체어에 해당하기 때문이다.
// 마찬가지로 label for도 htmlFor을 의미한다.
// 또 style을 직접 입력하여 react에서 style을 적용하는 것도 가능하다.
