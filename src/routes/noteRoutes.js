const express = require("express");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require("../controllers/noteController");
const {
  noteValidation,
  validateRequest
} = require("../middleware/validationMiddleware");
const router = express.Router();
router.post(
  "/",
  noteValidation,
  validateRequest,
  createNote
);
router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put(
  "/:id",
  noteValidation,
  validateRequest,
  updateNote
);
router.delete("/:id", deleteNote);
module.exports = router;