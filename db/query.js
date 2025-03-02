import { setAuthCookie } from "@/app/action";
import { User } from "@/models/user-models";
import { replaceIdObject } from "@/utils";

export async function createUser(user) {
  return await User.create(user);
}

export async function foundUserCradentials(cradentials) {
  const user = await User.findOne(cradentials).lean();
  if (user) {
    const created = replaceIdObject(user);
    await setAuthCookie(created.id);
    return created;
  } else {
    return null;
  }
}

export async function addWatchList(movieId, authId) {
  if (authId) {
  }
}
