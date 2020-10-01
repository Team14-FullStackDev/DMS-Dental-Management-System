const mongoose = require('mongoose');

const { Schema } = mongoose;

const recordSchema = new Schema(
  {
    patient_name: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    phone_number: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    gender: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    birthday: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    address: {
      type: String,
      min: 6,
      max: 255
    },
    city: {
      type: String,
      required: true,
      min: 6,
      max: 255
    },
    zipcode: {
      type: String,
      min: 6,
      max: 255
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('patient', recordSchema);