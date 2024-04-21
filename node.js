// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (CSS, JavaScript, etc.) from a directory named 'public'
app.use(express.static('public'));

// Route for handling form submission
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body; // Assuming your form has 'name' and 'email' fields

  // Do something with the form data, such as saving it to a database
  console.log(`Received form data: Name - ${name}, Email - ${email}`);

  // Send a response (e.g., confirmation message)
  res.send('Form submitted successfully!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
