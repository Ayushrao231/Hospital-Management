const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");
// BOOK
const auth = require("../middleware/auth");
router.post("/book",auth, async (req, res) => {

  const { doctorId, date } = req.body;
  const patientId = req.user.id; 

  const appointment = new Appointment({
    patientId,
    doctorId,
    date
  });

  await appointment.save();
  res.send("Appointment Booked");
});

// CANCEL
 router.delete("/cancel/:id", async (req, res) => {
   await Appointment.findByIdAndDelete(req.params.id);
    res.send("Appointment Cancelled");
   });
// GET ALL
// GET appointments (protected)

router.get("/", auth, async (req, res) => {
  const userId = req.user.id;
  const role = req.user.role;

  let filter = {};

  if (role === "patient") {
    filter = { patientId: userId };
  } else {
    filter = { doctorId: userId };
  }

  const data = await Appointment.find(filter)
    .populate("patientId", "name")
    .populate("doctorId", "name");

  res.json(data);
});
module.exports = router;