class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Window Image</h1>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAxNzExMzBfMTc4/MDAxNTEyMDIxMTMxOTc2.UmV53rFQUZZV3PXRjyabcxG5yVRsH0BUm70TGYUzVrsg.5JLII34U-W5b_ngN_MCx_xNyBAZ3AJW1vCv6Lq9lh8cg.JPEG.allthat_art/windows_xp_bliss-wide.jpg?type=w800" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));

// Javascript 구문, 확장 또는 Javascript + XML을 의미한다.
// Javascript에서 HTML로 보이는 태그를 입력하는데 완전히 유효하지는 않다.
// HTML 개별 템플릿을 갖는 대신에 Javascript에서 불러와 단일구성요소를 보고 그 결과를 직접 볼 수 있다.
// 그 이유는 BABBEL이 HTML 문자를 유효한 Javascript 코드로 바꿔주는 역할을 한다.
// JSX는 합법적인 Javascript가 아니기 때문에 BABBEL을 이용해 Javascript에 트랜스필름을 쌓아야 한다.
// 몇가지 규칙을 살펴보자면 HTML이나 Js태그를 쓸 수 있고 셀프 닫기 태그를 입력이나 이미지처럼 사용할 수 있다. 이때는 항상 /가 있어야 한다.
// 윗부분은 구성요소를 정의하는 부분이며 반응 구성요소를 확장하고 렌더링 메서드를 통해서 한가지 요소를 반환할 수 있다.
// Class 구성요소 안에 한번에 많은 태그를 넣을 수 없기 때문에 2개 이상의 태그를 넣으려면 이렇게 2개 태그를 하나의 태그로 감싸야한다.
// 이제 HTML 파일에 호출하려면 리액션D.D 렌더링을 하고 DOM은 대문자로 입력하며 구성요소 이름을 입력한다.
// 그리고 ID요소를 입력하여 구성요소가 담길 위치를 지정한다.
// BABELJS.IO에서 HTML태그를 입력하면 자동으로 React 구성요소로 변환하는 과정을 볼 수 있다.
