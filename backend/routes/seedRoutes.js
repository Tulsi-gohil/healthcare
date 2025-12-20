const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Appointment = require('../models/Appointment');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  try {
    await User.deleteMany();
    await Appointment.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('password', salt);

    const user = await User.create({ name: 'Alice', email: 'alice@example.com', password: hash });
    const admin = await User.create({ name: 'Admin', email: 'admin@example.com', password: hash, isAdmin: true });

    await Appointment.create({ user: user._id, patientName: 'Alice', doctor: 'Dr. Smith', date: new Date(Date.now() + 86400000), reason: 'Checkup' });

    res.json({ success: true, message: 'Seed inserted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Seed failed' });
  }
});

module.exports = router;