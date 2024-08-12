import mongoose from "mongoose";
import { formatDateAndTime } from "./function.js";

const getDefaultDate = () => formatDateAndTime().formattedDate;
const getDefaultTime = () => formatDateAndTime().formattedTime;

const NoteSchema = new mongoose.Schema({
  id: String,
  name: String,
  message: [
    {
      text: String,
      date: {
        type: String,
        default: getDefaultDate,
      },
      time: {
        type: String,
        default: getDefaultTime,
      },
    },
  ],
  color: String,
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;
