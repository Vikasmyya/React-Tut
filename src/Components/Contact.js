import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Componentdidmount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="user-list">
        <h1>Contact Us</h1>
        <UserClass name={"Vikas from 2st class"} />
        <UserClass name={"Vikas from 1st class"} />
      </div>
    );
  }
}

export default Contact;
