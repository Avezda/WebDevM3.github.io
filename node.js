const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submission
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body; // Assuming your form has 'name' and 'email' fields

  // Log the form data to the console
  console.log(`Received form data: Name - ${name}, Email - ${email}`);

  // Send a response back to the client
  res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
