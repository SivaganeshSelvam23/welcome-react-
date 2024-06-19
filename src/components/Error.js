import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f0f0f0",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Oops...🚀</h1>
        <h3>
          {error.status} Page {error.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;
