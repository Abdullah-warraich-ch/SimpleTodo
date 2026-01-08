import React from "react";
import Login from "../components/layout/Login";

function Profile() {
  return (
    <div className="flex flex-col  items-center h-screen ">
      <div>
        <Login />
      </div>
      <div className="flex items-center h-full">
        <h1 className="text-primary font-extrabold text-5xl">
          Please Login To Continue
        </h1>
      </div>
    </div>
  );
}

export default Profile;
