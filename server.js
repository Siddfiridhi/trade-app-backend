const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());



const dbURI = process.env.dbURI; // Use the environment variable for MongoDB URI
if (!dbURI) {
    console.error('Error: MONGODB_URL is not defined in the environment variables.');
    process.exit(1); // Exit the application if the URI is missing
}
// 'mongodb://localhost:27017/userData'


mongoose.connect(dbURI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));



app.use('/api/users', userRoutes);

 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
