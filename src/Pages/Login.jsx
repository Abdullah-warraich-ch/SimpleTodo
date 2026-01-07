import React from "react";

function Login() {
  return (
    <div>
      <button className="font-kanit py-2 px-4 bg-primary text-white rounded mr-4 hover:bg-white hover:text-primary border-2 border-primary transition duration-300 font-normal">
        Login
      </button>
      <button className="font-kanit py-2 px-4 bg-primary text-white rounded hover:bg-white hover:text-primary border-2 border-primary transition duration-300 font-normal">
        Log Out
      </button>
    </div>
  );
}

export default Login;
