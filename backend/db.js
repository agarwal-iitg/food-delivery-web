const mongoose = require('mongoose');

const uri = 'mongodb+srv://aayush_agarwal:1234@cluster0.dmzxcmg.mongodb.net/foodMERN?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your connection string

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('connected to database');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process on error
  }
};

const fetchData = async () => {
  try {
    const data = await mongoose.connection.db.collection("foodData").find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.food_items=data;
    global.food_category=foodCategory;
    return {data,foodCategory};
  } catch (err) {
    console.error('Error fetching data:', err);
    return []; // Example: Return an empty array in case of error
  }
};

module.exports = { connectDB, fetchData }; // Export both functions
