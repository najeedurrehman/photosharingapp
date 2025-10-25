import { Schema } from "mongoose";

const roleScheme = new Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "ACCOUNT",
    },
  ],
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

export default roleScheme;