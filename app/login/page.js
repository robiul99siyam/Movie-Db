import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-moviedb-black min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
        {" "}
        <div className="text-center mb-6">
          <h1 className="text-white text-3xl font-bold mb-4">Sign In</h1>
          <LoginForm />
          <div className="mt-6 text-moviedb-gray">
            New to moviedb?
            <Link href="/register" className="text-white hover:underline">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
