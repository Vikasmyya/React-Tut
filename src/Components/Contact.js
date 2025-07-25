import User from "./User";
import UserClass from "./UserClass";

const Contact = () => {
  return (
    <div className="user-list">
      <h1>Contact Us</h1>
      <User name={"Vikas from function"} />
      <UserClass name={"Vikas from class"} />
    </div>
  );
};

export default Contact;
