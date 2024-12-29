const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:false,
      // Ensure unique email addresses
      }, // Email is optional
  answers: [
    {
      // Use either Map or Array, depending on your needs
      type: Map,
      of: String // If you want detailed answers as key-value pairs
    }
    // Or, use a simple array of strings with default values
    // { type: [String], default: Array(20).fill(null) }
  ]
});

module.exports = mongoose.model('User', userSchema);
