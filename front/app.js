let channels = [{ name: "Hardware Support" }, { name: "Software Support" }];

class Channel extends React.Component {
  onClick() {
    console.log("I was clicked", this.props.name);
  }
  render() {
    return <li onClick={this.onClick.bind(this)}>{this.props.name}</li>;
    // return React.createElement("li", null, "Channel name");
  }
}

class ChannelList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.channels.map((channel) => {
          return <Channel name={channel.name} />;
        })}
      </ul>
    );
  }
}

ReactDOM.render(
  <ChannelList channels={channels} />,
  document.getElementById("app")
);
