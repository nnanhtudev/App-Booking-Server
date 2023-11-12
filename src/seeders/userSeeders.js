// userSeeders.js
const mongoose = require('mongoose');
const User = require('../model/User');

const UserCollection = async () => {

  // Kết nối đến cơ sở dữ liệu MongoDB
  await mongoose.connect('mongodb://localhost:27017/db_booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  db.once('open', async () => {
    console.log('MongoDB connected successfully.');

    const seedData = [
      {
        username: 'user1',
        password: 'password1',
        fullName: 'User One',
        phoneNumber: '1234567890',
        email: 'user1@example.com',
        isAdmin: false,
      },
    ];
    try {
      await User.insertMany(seedData);
      console.log('Seed data inserted successfully.');
      mongoose.connection.close();
    } catch (error) {
      console.error('Error inserting seed data:', error);
      mongoose.connection.close();
    }
  });
}