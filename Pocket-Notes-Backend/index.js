import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConnect from "./MongooseConnection.js";
import Note from "./NotesModel.js";
import { formatString } from "./function.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT;

mongooseConnect();

// API to get all notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find({});
    const requiredNotes = notes.map((note) => {
      return {
        id: note.id,
        name: note.name,
        color: note.color,
        message: note.message,
      };
    });

    res.status(200).json(requiredNotes);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving the notes.");
  }
});

// Api to create a note
app.post("/api/notes/note/add", async (req, res) => {
  const { name, color } = req.body;

  if (!name || !color) {
    return res.status(400).send("Name and color are required fields.");
  }

  try {
    const result = await Note.create({
      id: formatString(name),
      name,
      color,
      message: [],
    });

    console.log(result);
    res.status(201).send("Note created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the note.");
  }
});

// Api to create a messsage
app.post("/api/notes/:noteId/message/add", (req, res) => {
  const noteId = req.params.noteId;
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).send("Invalid message content.");
  }

  Note.findOneAndUpdate(
    { id: noteId },
    {
      $push: { message: { text: message } },
    },
    { new: true, useFindAndModify: false }
  )
    .then((updatedNote) => {
      if (!updatedNote) {
        return res.status(404).send("Note not found.");
      }
      res.status(200).send("Message added successfully.");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while adding the message.");
    });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
