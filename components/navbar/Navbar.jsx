import { cookies } from "next/headers";
import Link from "next/link";
import Logout from "./Logout";
import SearchInputField from "./SearchInputField";

export default async function Navbar() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("_us");

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent ">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-red-600 text-4xl font-bold">
            MOVIE DB
          </Link>
          <div className="ml-8 space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/compare" className="text-white hover:text-gray-300">
              Compare Movies
            </Link>

            <Link href="/watchList" className="text-white hover:text-gray-300">
              Watch Later
            </Link>
            {token && <Logout />}
          </div>
        </div>
        {/* search input fileds components here now  */}

        <SearchInputField />
      </div>
    </nav>
  );
}
