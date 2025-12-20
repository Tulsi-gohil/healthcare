require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is running successfully 🚀'));

const start = async () => {
  await connectDB();

  app.use('/api/auth', require('./routes/authRoutes'));
  app.use('/api/appointments', require('./routes/appointmentRoutes'));

    // development-only seed route
    if (process.env.NODE_ENV !== 'production') {
      app.use('/api/seed', require('./routes/seedRoutes'));
    }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
};

start().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
