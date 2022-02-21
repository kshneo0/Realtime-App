import React, { Component } from "react";
import Channel from "./Channel.jsx";

class ChannelList extends Component {
  render() {
    return (
      <ul>
        {this.props.channels &&
          this.props.channels.map((chan) => {
            return (
              <Channel
                channel={chan}
                key={chan.id}
                setChannel={this.props.setChannel}
              />
            );
          })}
      </ul>
    );
  }
}

// ChannelList.propType = {
//   channels: React.PropTypes.object.isRequired,
//   setChannel: React.PropTypes.func.isRequired,
// };

export default ChannelList;
