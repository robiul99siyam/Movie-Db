import { registerFormUser } from "@/app/action";

export default function RegisterForm() {
  return (
    <form id="signupForm" className="space-y-4" action={registerFormUser}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        id="firstName"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="Last Name"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Create Password"
        className="w-full p-3 bg-moviedb-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-moviedb-red"
        required
      />

      <button
        type="submit"
        className="w-full bg-moviedb-red text-white py-3 rounded hover:bg-red-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
  );
}
