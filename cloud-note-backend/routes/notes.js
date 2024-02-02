const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUT 1: Get All the notes using : Get
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json({ notes });
});

//ROUT 2: Add a new  note using : Post
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Title can't be blank").isLength({ min: 2 }),
    body("description", "Description can't be blank").isLength({ min: 5 }),
    body("tags"),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are errors, return bad request and the errors
      const result = validationResult(req);
      if (!result.isEmpty()) {
        return res.send({ errors: result.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenote = await note.save();
      res.send(savenote);
    } catch (error) {
      res.status(500).send("Internal server Error");
    }
  }
);

//ROUT 3: Updating note using :Put
router.put(
  "/updatenote/:id",
  fetchuser,
  [
    body("title", "Title can't be blank").isLength({ min: 2 }),
    body("description", "Description can't be blank").isLength({ min: 5 }),
    body("tags"),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    //Create a new Note Object
    try {
      const newNote = {};
      if (title) {
        newNote.title = title;
      }
      if (title) {
        newNote.description = description;
      }
      if (title) {
        newNote.tag = tag;
      }

      //Find the note to be updated and update it
      let note = await Note.findById(req.params.id);
      if (!note) {
        res.status(404).send("Not Found");
      }
      if (note.user.toString() !== req.user.id) {
        res.status(401).send("Note Allowed");
      }
      note = await Note.findByIdAndUpdate(
        req.params.id,
        { $set: newNote },
        { new: true }
      );
      res.json({ note });
    } catch (error) {
      res.status(500).send("Internal server Error");
    }
  }
);

//ROUT 4:Find the note to delete it using:Delete
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //Find the note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      res.status(404).send("Not Found");
    }
    //Allow deletion anly user owns this note
    if (note.user.toString() !== req.user.id) {
      res.status(401).send("Note Allowed");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: { note } });
  } catch (error) {
    res.status(500).send("Internal server Error");
  }
});

module.exports = router;
