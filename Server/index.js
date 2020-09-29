const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to Database
dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
  () => console.log('Connected to Database'),
);


// Import Routes
const user_auth_route = require('./routes/user_auth');

// Route Middlewares
app.use('/api/user', user_auth_route);




// How to we start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));