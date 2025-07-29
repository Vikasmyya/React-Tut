import React from "react";
import UserContext from "../Utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    console.log(" Child constructor");
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  async componentDidMount() {
    console.log(" child Componentdidmount");
    //API call

    const data = await fetch("https://api.github.com/users/vikasmyya");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { login, location, avatar_url } = this.state.userInfo;
    console.log("child render");

    return (
      <div className="user">
        <img src={avatar_url} />
        <div>
          <h2>
            <UserContext.Consumer>
              {({ loggedinUser }) => {
                return <h2>{loggedinUser}</h2>;
              }}
            </UserContext.Consumer>
          </h2>
        </div>

        <h2>Name: {login}</h2>
        <p>Location: {location}</p>
        <p>Contact: vikas@gmail.com</p>
      </div>
    );
  }
}

export default UserClass;
