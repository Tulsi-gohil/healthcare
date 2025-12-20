require('dotenv').config();
const connectDB = require('./config/db');
const User = require('../models/User');
const Appointment = require('./models/Appointment');
const bcrypt = require('bcryptjs');

const seed = async () => {
  await connectDB();
  await User.deleteMany();
  await Appointment.deleteMany();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash('password', salt);

  const user = await User.create({ name: 'Alice', email: 'alice@example.com', password: hash });
  const admin = await User.create({ name: 'Admin', email: 'admin@example.com', password: hash, isAdmin: true });

  await Appointment.create({ user: user._id, patientName: 'Alice', doctor: 'Dr. Smith', date: new Date(Date.now() + 86400000), reason: 'Checkup' });

  console.log('Seed complete');
  process.exit(0);
};

seed().catch(e => { console.error(e); process.exit(1); });