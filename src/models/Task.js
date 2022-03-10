import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    mat: {
      type: String,
      required: true,
      unique: true,
      trim: true
  },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
      type: String,
      required: true,
    },
    done:{
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


export default model("Task", taskSchema);
