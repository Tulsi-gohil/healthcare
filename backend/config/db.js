const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  let mongod;

  try {
    if (mongoUri) {
      const conn = await mongoose.connect(mongoUri);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      return conn;
    }

    throw new Error('MONGO_URI not set');
  } catch (error) {
    console.warn('MongoDB connection failed:', error.message);
    console.warn('Falling back to in-memory MongoDB for development...');

    const { MongoMemoryServer } = require('mongodb-memory-server');
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const conn = await mongoose.connect(uri);
    console.log(`Connected to in-memory MongoDB: ${conn.connection.host}`);

    const stopMongod = async () => {
      try {
        if (mongod) await mongod.stop();
      } catch (e) {
        /* ignore */
      }
    };

    process.on('exit', stopMongod);
    process.on('SIGINT', async () => { await stopMongod(); process.exit(0); });
    process.on('SIGTERM', async () => { await stopMongod(); process.exit(0); });

    return conn;
  }
};

module.exports = connectDB;
