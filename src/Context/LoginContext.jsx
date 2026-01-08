import React, { createContext, useState } from "react";

const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [loginStatus, setLoginStatus] = useState(false);

  return (
    <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
