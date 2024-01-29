"use client";

import { useEffect, useState, useContext, MouseEventHandler } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import clsx from "clsx";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const { loading, error } = useContext(AuthenticationContext);
  const [open, setOpen] = useState(false);

  const { signIn, signUp } = useAuth();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignin) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }

    setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log("CLOSE");
    setOpen(false);
  };

  const handleClick = () => {
    if (isSignin) {
      signIn(
        {
          email: inputs.email,
          password: inputs.password,
        },
        handleClose,
      );
    } else {
      signUp(inputs, handleClose);
    }
  };

  return (
    <div>
      <button
        className={clsx("rounded border  px-4 py-1", {
          "bg-blue-500 text-white": isSignin,
        })}
        onClick={handleOpen}
      >
        {isSignin ? "Sign In" : "Sign Up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative p-2">
            {error ? (
              <Alert severity="error" className="mb-4">
                {error}
              </Alert>
            ) : null}
            <div className="mb-2 border-b pb-2 font-bold uppercase">
              <p className="text-center text-sm uppercase">
                {isSignin ? "Sign In" : "Create Account"}
              </p>
            </div>
            <div className="">
              <h2 className="text-center text-2xl font-light">
                {isSignin
                  ? "Log Into Your Account"
                  : "Create Your Opentable Account"}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSignin={isSignin}
              />
              <button
                className="mb-5 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400"
                disabled={disabled}
                onClick={() => handleClick()}
              >
                {isSignin ? "Sign In" : "Create Account"}
              </button>
            </div>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                <CircularProgress />
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
