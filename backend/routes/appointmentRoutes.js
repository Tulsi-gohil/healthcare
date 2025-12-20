const express = require('express');
const Appointment = require('../models/Appointment');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Book an appointment (authenticated)
router.post('/book', authMiddleware, async (req, res) => {
  try {
    const { patientName, doctor, date, reason } = req.body;
    if (!patientName || !doctor || !date) return res.status(400).json({ success: false, message: 'Missing fields' });

    const appt = await Appointment.create({
      user: req.user._id,
      patientName,
      doctor,
      date: new Date(date),
      reason
    });

    res.json({ success: true, appointment: appt });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get current user's appointments
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const appts = await Appointment.find({ user: req.user._id }).sort({ date: -1 });
    res.json({ success: true, appointments: appts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Admin: get all appointments
router.get('/', authMiddleware, async (req, res) => {
  try {
    if (!req.user.isAdmin) return res.status(403).json({ success: false, message: 'Forbidden' });
    const appts = await Appointment.find().populate('user', 'name email').sort({ date: -1 });
    res.json({ success: true, appointments: appts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Cancel appointment
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const appt = await Appointment.findById(req.params.id);
    if (!appt) return res.status(404).json({ success: false, message: 'Not found' });
    if (String(appt.user) !== String(req.user._id) && !req.user.isAdmin) return res.status(403).json({ success: false, message: 'Forbidden' });

    appt.status = 'cancelled';
    await appt.save();

    res.json({ success: true, appointment: appt });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;