import { useState } from "react";

const Learning = () => {
  const [status, setStatus] = useState("login");

  const toggelStatus = () => {
    if (status == "login") {
      setStatus("signup");
    } else {
      setStatus("login");
    }
  };

  return (
    <div>
      <button onClick={() => toggelStatus()}>toggel</button>
      {status == "signup" ? <div>signup</div> : <div>login</div>}
    </div>
  );
};

export default Learning;
