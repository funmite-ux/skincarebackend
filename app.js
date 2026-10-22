const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'navbar-app')));

// Serve images (only needed if images are outside navbar-app)
app.use('/images', express.static(path.join(__dirname, 'images')));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar-app', 'home.html'));
});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar-app', 'about.html'));
});

// Products page
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar-app', 'products.html'));
});

// Services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar-app', 'services.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'navbar-app', 'contact.html'));
});

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});