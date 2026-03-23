const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error('PRO TIP: Make sure your MongoDB service is running locally OR update MONGODB_URI in your .env file with a cloud instance string.');
    process.exit(1);
  }
};

module.exports = connectDB;
