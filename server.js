// DEPS
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// LOCAL IMPORTS
const bootcamps = require('./routes/bootcamps');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
// DEV LOGGING MIDDKEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// MOUNT ROUTES
app.use('/api/v1/bootcamps', bootcamps);

// START server
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message} `);
  // Close server with exit
  server.close(() => process.exit(1));
});
