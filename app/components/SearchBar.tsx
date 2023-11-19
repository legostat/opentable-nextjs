"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleButtonClick = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (location === "") return;
    router.push(`/search?city=${location}`);
    setLocation("");
  };

  return (
    <form className="mx-auto flex justify-center py-3 text-left text-lg">
      <input
        className="mr-3 w-80 rounded p-2"
        type="text"
        placeholder="State, City, or Town"
        value={location}
        onChange={handleInput}
      />
      <button
        className="rounded bg-red-600 px-9 py-2 font-semibold text-white"
        onClick={handleButtonClick}
      >
        Let's go
      </button>
    </form>
  );
}
