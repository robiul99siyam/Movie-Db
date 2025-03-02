"use client";
import { logout } from "@/app/action";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router?.push("/login");
  };
  return (
    <span className="cursor-pointer" onClick={handleLogout}>
      Logout
    </span>
  );
}
