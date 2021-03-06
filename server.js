// DEPS
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

// LOCAL IMPORTS
const bootcamps = require('./routes/bootcamps');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE

// Body parse
app.use(express.json());

// DEV LOGGING MIDDKEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MOUNT ROUTES
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);
// START server
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold
  )
);

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server with exit
  server.close(() => process.exit(1));
});
