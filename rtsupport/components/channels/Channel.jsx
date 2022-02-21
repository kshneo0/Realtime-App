import React, { Component } from "react";

class Channel extends React.Component {
  onClick(e) {
    e.preventDefault();
    const { setChannel, channel } = this.props;
    setChannel(Channel);
  }
  render() {
    const { channel, activeChannel } = this.props;
    const active = channel === activeChannel ? "active" : "";
    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>{channel.name}</a>
      </li>
    );
  }
}

// Channel.propTypes = {
//   channel: React.PropTypes.object.isRequired,
//   setChannel: React.PropTypes.func.isRequired,
// };

export default Channel;
