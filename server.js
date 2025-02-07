const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const emailHandler = require('./email'); // Ensure email.js exists

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder (or change to your actual folder)
app.use(express.static(__dirname + '/public'));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Contact Form Route
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    try {
        // Send email with form data
        await emailHandler.sendEmail(name, email, message);

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Error sending message' });
    }
});

// Start Server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));