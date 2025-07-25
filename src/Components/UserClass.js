import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="user">
        <h2>Name: {this.props.name}</h2>
        <p>Location: Karnataka</p>
        <p>Contact: vikas@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
