import mongoose, { Schema } from "mongoose";
const watchListSchema = new Schema({
  movieId: {
    type: Array,
    required: true,
  },
});

const WatchList =
  mongoose.models.watchList ?? mongoose.model("watchList", watchListSchema);

export { WatchList };
