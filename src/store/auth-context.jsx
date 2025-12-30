import React, { Children } from "react";
import { createContext, useEffect, useContext, useReducer } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(authContext);

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const authReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        jwtToken: action.payload.jwtToken,
        user: action.payload.user,
        isAuthenticated: true,
      };

    case LOGOUT:
      return {
        ...prevState,
        jwtToken: null,
        user: null,
        isAuthenticated: false,
      };

    default:
      return prevState;
  }
};
export function AuthProvider({ children }) {
  const initialAuthState = () => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const user = localStorage.getItem("user");
      if (jwtToken && user) {
        return {
          jwtToken,
          user: JSON.parse(user),
          isAuthenticated: true,
        };
      }
    } catch (error) {
      console.error("Failed to load from the localStorage", error);
    }

    return {
      jwtToken: null,
      user: null,
      isAuthenticated: false,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    try {
      if (authState.isAuthenticated) {
        localStorage.setItem("jwtToken", authState.jwtToken);
        localStorage.setItem("user", JSON.parse(authState.user));
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
      }
    } catch (error) {
      console.error("Failed to save to localStorage", error);
    }
  }, [authState]);

  const loginSuccess = (jwtToken, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: { jwtToken, user } });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  <AuthContext.Provider
    value={{
      loginSuccess,
      logout,
      jwtToken: authState.jwtToken,
      user: authState.user,
      isAuthenticated: authState.isAuthenticated,
    }}
  >
    {children}
  </AuthContext.Provider>;
}
