"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import clsx from "clsx";
import AuthModalInputs from "./AuthModalInputs";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
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
          <div className="p-2">
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
              <button className="mb-5 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400">
                {isSignin ? "Sign In" : "Create Account"}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
