import "./errorMsg.css";

const ErrorMsg = ({ msg, children }) => {
  return (
    <>
      <div className="error">{msg || children}</div>
    </>
  );
};

export default ErrorMsg;
