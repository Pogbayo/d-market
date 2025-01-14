import mongoose, { Schema, Document } from "mongoose";

// Define the User schema
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt` fields
);

// Define the User document interface
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create the User model
const User = mongoose.model<IUser>("User", UserSchema);

export default User;
