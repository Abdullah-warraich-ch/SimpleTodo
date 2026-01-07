import React, { createContext, use } from "react";
const initialState = {
  user: null,
};
function AuthContext() {
  const AuthContext = createContext();
}
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  <AuthContext.Provider value={{ state, dispatch }}>
    {children}
  </AuthContext.Provider>;
}

export default AuthContext;
export { AuthProvider };
