require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

app.use(cors({
  origin: 'https://healthcare-dusky-one.vercel.app',
  credentials: true
}));
app.use(express.json());

// Root route (JSON)
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is running successfully 🚀'
  });
});

const start = async () => {
  await connectDB();

  // MATCH FRONTEND ROUTES
  app.use('/auth', require('./routes/authRoutes'));
  app.use('/appointments', require('./routes/appointmentRoutes'));

  if (process.env.NODE_ENV !== 'production') {
    app.use('/seed', require('./routes/seedRoutes'));
  }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () =>
    console.log(`✅ Server running on port ${PORT}`)
  );
};

start().catch(err => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});
