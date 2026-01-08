import React, { useContext } from "react";
import LoginContext from "../../Context/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginStatus, setLoginStatus } = useContext(LoginContext);
  const navigate = useNavigate();
  function handlelogin() {
    console.log("Handle Login Called");
    if (loginStatus) {
      setLoginStatus(false);
      navigate("/profile");
    } else {
      setLoginStatus(true);
      navigate("/");
    }
  }

  if (loginStatus) {
    return (
      <div>
        <button
          onClick={handlelogin}
          className=" my-5 font-kanit py-2 px-4 bg-primary text-white rounded hover:bg-white hover:text-primary border-2 border-primary transition duration-300 font-normal"
        >
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={handlelogin}
          className="my-5 font-kanit py-2 px-4 bg-primary text-white rounded mr-4 hover:bg-white hover:text-primary border-2 border-primary transition duration-300 font-normal"
        >
          Log In
        </button>
      </div>
    );
  }
}

export default Login;
