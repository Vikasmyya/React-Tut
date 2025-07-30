const Contact = () => {
  return (
    <div>
      <h1 className="font-bold mx-20">Contact US</h1>
      <form>
        <input
          type="test"
          placeholder="name"
          className="p-2 m-2 border border-black"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="p-2 m-2 border border-black"
        ></input>
        <button className="p-2 m-2 border border-black bg-gray-200">
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
