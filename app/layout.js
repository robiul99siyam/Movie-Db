import Navbar from "@/components/navbar/Navbar";
import connectMongo from "@/service/mongoose";
import { Inter } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "Movies-Home",
  description: "create a new movie",
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
