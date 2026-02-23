import mongoose from "mongoose";

const chatSessionSchema = new mongoose.Schema({
  userA: String,
  userB: String,
  expiresAt: Date,
  isActive: { type: Boolean, default: true }
});

export default mongoose.model("ChatSession", chatSessionSchema);