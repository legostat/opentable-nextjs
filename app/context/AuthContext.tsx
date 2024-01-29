"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { createContext, useEffect, useReducer } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  city: string;
  email: string;
  phone: string;
};

interface State {
  init: boolean;
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  authDispatch: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}

const authReducer = (state: State, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "init":
      return {
        init: true,
        data: null,
        error: null,
        loading: false,
      };
    case "loading":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        ...state,
        init: true,
        data: action.payload,
        error: null,
        loading: false,
      };
    case "fail":
      return {
        ...state,
        init: true,
        data: null,
        error: action.payload,
        loading: false,
      };
  }
  throw Error("Unknown action: " + action.type);
};

export const AuthenticationContext = createContext<AuthState>({
  init: false,
  loading: false,
  error: null,
  data: null,
  authDispatch: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, authDispatch] = useReducer(authReducer, {
    init: false,
    loading: false,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return authDispatch({ type: "init" });
      }

      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
      authDispatch({ type: "success", payload: response.data });
    } catch (error: any) {
      authDispatch({
        type: "fail",
        payload: error.response.data.errorMessage,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        authDispatch,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
