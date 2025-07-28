import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name + " Child constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " child Componentdidmount");
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;

    console.log(name + "child render");

    return (
      <div className="user">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h2>Name: {name}</h2>
        <p>Location: Karnataka</p>
        <p>Contact: vikas@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
