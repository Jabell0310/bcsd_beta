import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It's <code className="App-jabell">jabell0310</code> server!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// 여기서 관습적인 방법이 사용되었는데 component를 써서 만들든 CRA 방법을 이용하든
// CSS스타일링은 구성요소이름-적용할 요소 형식으로 작성한다.
// 여기서 component에서 다룬 className 속성이 사용된다.
