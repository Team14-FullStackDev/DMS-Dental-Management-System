const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const mongoose = require('mongoose');
const { connect } = require("mongoose");
const { success, error } = require("consola");



// Bring in the app constants
const { DB, PORT } = require("./config");

require("./middlewares/passport")(passport);

global.Record = require('./models/patientModel');
const routes = require('./routes/patientRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
  DB,
  { useNewUrlParser: true }
);

const port = process.env.PORT || 3000;
// Initialize the application
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(passport.initialize());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

if (process.env.NODE_ENV === 'production'){
  // Static folder
  app.use(express.static(__dirname + '/public/'))

  //Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

console.log(`Server started on port ${port}`);









// User Router Middleware
// app.use("/api/users", require("./routes/users"));



// const startApp = async () => {
//   try {
//     // Connection With DB
//     await connect(DB, {
//       useFindAndModify: true,
//       useUnifiedTopology: true,
//       useNewUrlParser: true
//     });

//     success({
//       message: `Successfully connected with the Database`,
//       badge: true
//     });

//     // Start Listenting for the server on PORT
//     app.listen(PORT, () =>
//       success({ message: `Server started on PORT ${PORT}`, badge: true })
//     );
//   } catch (err) {
//     error({
//       message: `Unable to connect with Database \n${err}`,
//       badge: true
//     });
//     startApp();
//   }
// };

// startApp();
