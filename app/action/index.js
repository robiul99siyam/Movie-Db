"use server";
import { addWatchList, createUser, foundUserCradentials } from "@/db/query";
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
export async function registerFormUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  console.log(created);
  redirect("/login");
}

export const loginUser = async (formData) => {
  try {
    const credentials = {};
    credentials.email = formData.get("email");
    credentials.password = formData.get("password");
    const user = await foundUserCradentials(credentials);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export async function setAuthCookie(user_id) {
  // const hashedEmail = await bcrypt.hash(user_id, 10);
  cookies().set("_us", user_id, {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });
  return { message: "Cookie set successfully!" };
}

export async function logout(data) {
  (await cookies()).delete("_us");
}

export async function updateWatchList(movieId, authId) {
  try {
    await addWatchList(movieId, authId);
  } catch (err) {
    console.log(err);
  }
}
