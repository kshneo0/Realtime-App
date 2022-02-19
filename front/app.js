class Channel extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
    // return React.createElement("li", null, "Channel name");
  }
}

ReactDOM.render(
  <Channel name="Hardware Support" />,
  document.getElementById("app")
);
