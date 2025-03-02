require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Debugging: Check if MONGO_URI is loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://SravyaTejavath:SravyaJulie@financedb.lkt1e.mongodb.net/';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected!'))
.catch(err => console.log('❌ MongoDB Connection Error:', err));

// Sample Route (Test if the server is running)
app.get('/', (req, res) => {
    res.send('🚀 Server is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🔥 Server running on port ${PORT}`);
});
