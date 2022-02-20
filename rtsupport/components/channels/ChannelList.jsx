import React, { Component } from "react";
import Channel from "./Channel.jsx";

class ChannelList extends Component {
  render() {
    return (
      <ul>
        {this.props.channels.map((chan) => {
          <Channel channel={chan} setChannel={this.props.set} />;
        })}
      </ul>
    );
  }
}

ChannelList.propType = {
  channels: React.PropTypes.object.isRequired,
  setChannel: React.PropTypes.func.isRequired,
};

export default ChannelList;
