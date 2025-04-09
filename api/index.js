// Vercel serverless function entry point
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create a simple Express server for Vercel deployment
const app = express();
app.use(express.json());

// Add CORS headers for API routes
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Handle preflight requests
app.options('/api/*', (req, res) => {
  res.status(200).end();
});

// Hardcoded data for Vercel deployment
const profile = {
  id: 1,
  name: "Kurniawan Satria",
  bio: "Full-stack developer & tech enthusiast",
  avatar: "https://github.com/kurniawansatria.png",
  backgroundImage: "https://images.unsplash.com/photo-1674230226781-7a8cba6dd436",
  location: "Jakarta, Indonesia",
  profession: "Software Engineer"
};

const socialLinks = [
  { id: 1, platform: "Instagram", url: "https://instagram.com/satriakurniawan", icon: "instagram" },
  { id: 2, platform: "GitHub", url: "https://github.com/kurniawansatria", icon: "github" },
  { id: 3, platform: "LinkedIn", url: "https://linkedin.com/in/satriakurniawan", icon: "linkedin" }
];

const links = [
  { id: 1, title: "My YouTube Channel", description: "Check out my latest videos", url: "https://youtube.com/@satriakurniawan", icon: "youtube" }
];

// Simple routes
app.get('/api/profile', (req, res) => {
  res.json(profile);
});

app.get('/api/social-links', (req, res) => {
  res.json(socialLinks);
});

app.get('/api/links', (req, res) => {
  res.json(links);
});

// Add subscriber route
app.post('/api/subscribers', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ id: 1, name, email });
});

// Export the handler function
module.exports = (req, res) => {
  // Set the path for static files
  if (req.url.startsWith('/assets/')) {
    const filePath = path.join(__dirname, '../public', req.url);
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    return;
  }
  
  // Forward all other requests to Express
  return app(req, res);
};