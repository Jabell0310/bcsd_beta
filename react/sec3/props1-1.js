class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    bangs: 1,
  };
  render() {
    // this.props.from = 'blue'
    let bangs = "!".repeat(this.props.bangs);
    return (
      <p>
        Hello {this.props.to} from {this.props.from}
        {bangs}
      </p>
    );
  }
}

// props의 특징 중에 하나는 지정된 속성을 읽을 수만 있을 뿐 수정이나 삭제는 불가능하다.
// 그렇다고 데이터를 수정 또는 삭제가 불가능하다는 얘기는 아니다. 이것이 props의 불변성이다.
// props를 모두 지정할 수 없거나 지정하지 않을 때는 이렇게 기본값을 설정함으로써 오류가 발생하는 것을 막는다.
// 기본값 설정은 render 함수 바깥부분에서 지정할 수 있다.
// 실행부분에서 from이랑 bangs를 따로 규정하지 않는 이상은 기본값이 적용된다.
