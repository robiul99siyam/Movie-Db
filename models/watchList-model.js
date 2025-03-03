import mongoose, { Schema } from "mongoose";
const WatchSchema = new Schema({
  authId: {
    type: String,
    required: true,
  },
  movieId: {
    type: Array,
    required: true,
  },
});

const watchingModel =
  mongoose.models.watches ?? mongoose.model("watches", WatchSchema);

export { watchingModel };
