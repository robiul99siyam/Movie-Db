import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 mt-5">
      <h1 className="text-red-500 text-4xl font-semibold">Unauthorized</h1>
      <p className="text-gray-600 mt-2 mb-4">
        You are not authorized to view this page.
      </p>
      <Link
        href="/login"
        className="mt-6 inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg  hover:rounded-full transition-all duration-100"
      >
        Login
      </Link>
    </div>
  );
}
