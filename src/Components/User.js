const User = (props) => {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Location: Karnataka</p>
      <p>Contact: vikas@gmail.com</p>
    </div>
  );
};

export default User;
