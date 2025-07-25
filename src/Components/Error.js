import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Opps</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status}</h3>
      <h4>{err.statusText}</h4>
    </div>
  );
};

export default Error;
