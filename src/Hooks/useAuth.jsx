import React, { use, useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
