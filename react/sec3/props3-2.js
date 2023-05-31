class App extends React.Component {
  render() {
    return (
      <div>
        <Friend name="Karp" hobbies={["Dancing", "Taekwondo", "Violin"]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
