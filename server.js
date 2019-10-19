const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env' });
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
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`)
);
