class Channel extends React.Component {
  render() {
    return <li>Channel name</li>;
    // return React.createElement("li", null, "Channel name");
  }
}

ReactDOM.render(<Channel />, document.getElementById("app"));
