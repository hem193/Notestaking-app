const express = require("express");

const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController.js");
const { protect } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, CreateNote);
router
  .route("/:id")
  .get(getNoteById)
  .put(protect, UpdateNote)
  .delete(protect, DeleteNote);

module.exports = router;
