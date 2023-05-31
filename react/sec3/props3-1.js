class Friend extends React.Component {
  render() {
    const { name, hobbies } = this.props;
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          {hobbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// JSX를 이용하여 루프를 생성하는 것은 map매서드를 이용하여 거기 있는 컨텐츠를 HTML 태그에 삽입하는 것을 말한다.
// 이때 여기서 배열에 있는 컨텐츠를 변수 h에 담아서 li태그에 삽입한 것을 나타낸 것이다.
// 그럼 각각의 props가 전달되어 HTML파일에 나타날 것이다.
// 만약 전달안된 props가 존재하면 오류가 생기므로 기본값을 설정할 수도 있다.
// 이건 props1-1에 설명하였다.
