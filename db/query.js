import { setAuthCookie } from "@/app/action";
import { User } from "@/models/user-models";
import { watchingModel } from "@/models/watchList-model";
import connectMongo from "@/service/mongoose";
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
  try {
    await connectMongo(); // Ensure MongoDB is connected

    const foundWatchList = await watchingModel.findOne({ authId });
    if (foundWatchList) {
      if (foundWatchList.movieId.includes(movieId)) {
        // Remove movieId if it already exists
        foundWatchList.movieId.pull(movieId);
      } else {
        // Add movieId if it's not in the list
        foundWatchList.movieId.push(movieId);
      }
      await foundWatchList.save();
    } else {
      // Create a new watchlist entry if not found
      const newWatchList = new watchingModel({
        authId,
        movieId: [movieId],
      });
      await newWatchList.save();
    }
    return { success: true, message: "Watchlist updated successfully" };
  } catch (error) {
    console.error("❌ Error updating watchlist:", error);
    return { success: false, message: "Failed to update watchlist" };
  }
}

export async function getAllWatchlist() {
  try {
    const watchlist = await watchingModel.find().lean();
    return watchlist;
  } catch (e) {
    console.error("Error fetching watchlist data:", e);
    return [];
  }
}
