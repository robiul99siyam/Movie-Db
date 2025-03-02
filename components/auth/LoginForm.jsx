"use client";

import { loginUser } from "@/app/action";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const user = await loginUser(formData);

      if (user) {
        router.push("/");
      } else {
        setError("invalid cradentials ", error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <div className="my-2 text-red-500">{error}</div>}
      <form id="loginForm" className="space-y-4" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email or phone number"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
          required
        />
        <button
          type="submit"
          className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
