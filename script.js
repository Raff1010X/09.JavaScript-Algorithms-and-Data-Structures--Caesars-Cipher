class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.rot13 = this.rot13.bind(this);
  }

  componentDidMount() {
   this.setState({
      input: "palindrome?",
      output: this.rot13("palindrome?")
    });
  }

rot13(str) {
  let c = "";
  let retStr = "";
  [...str].forEach((el) => {
    c = el.charCodeAt();
    c = c >= 65 ? (c -= 13 , c = c <= 64 ? c = 90 + (c - 64) : c) : c;
    retStr += String.fromCharCode(c);
  })
  return retStr;
}  

  handleChange(e) {
    this.setState({
      input: e.target.value,
      output: this.rot13(e.target.value)
    });
  }

  render() {
    return (
      <div id="app">
        <h1>Caesars Cipher</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        ></input>
        <div id="output">{this.state.output}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
