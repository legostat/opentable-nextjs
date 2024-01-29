"use client";

import Link from "next/link";
import AuthModal from "./AuthModal";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { data, init } = useContext(AuthenticationContext);
  const { logout } = useAuth();

  return (
    <nav className="flex justify-between bg-white p-2">
      <Link href="/" className="text-2xl font-bold text-gray-700">
        OpenTable
      </Link>
      <div>
        {init ? (
          <div className="flex gap-x-2">
            {data ? (
              <button
                className="rounded border bg-blue-500 px-4  py-1 text-white"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        ) : null}
      </div>
    </nav>
  );
}
