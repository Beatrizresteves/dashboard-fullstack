// models/Employee.js

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  hireDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
