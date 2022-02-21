import React, { Component } from "react";
import User from "./User.jsx";

class UserList extends Component {
  render() {
    return (
      <ul>
        {this.props.users &&
          this.props.users.map((user) => {
            return <User key={user.id} user={user} />;
          })}
      </ul>
    );
  }
}

//  UserList.propType = {
//    users: React.PropTypes.array.isRequired,
//  };

export default UserList;
