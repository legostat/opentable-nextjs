import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { deleteCookie } from "cookies-next";

const useAuth = () => {
  const { authDispatch } = useContext(AuthenticationContext);

  const signIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void,
  ) => {
    try {
      authDispatch({ type: "loading" });

      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        },
      );
      authDispatch({ type: "success", payload: response.data });
      handleClose();
    } catch (error: any) {
      authDispatch({
        type: "fail",
        payload: error.response.data.errorMessage,
      });
    }
  };

  const signUp = async (
    {
      firstName,
      lastName,
      email,
      password,
      city,
      phone,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      city: string;
      phone: string;
    },
    handleClose: () => void,
  ) => {
    try {
      authDispatch({ type: "loading" });

      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          firstName,
          lastName,
          email,
          password,
          city,
          phone,
        },
      );
      authDispatch({ type: "success", payload: response.data });
      handleClose();
    } catch (error: any) {
      authDispatch({
        type: "fail",
        payload: error.response.data.errorMessage,
      });
    }
  };

  const logout = () => {
    deleteCookie("jwt");
    authDispatch({ type: "init" });
  };

  return {
    signIn,
    signUp,
    logout,
  };
};

export default useAuth;
