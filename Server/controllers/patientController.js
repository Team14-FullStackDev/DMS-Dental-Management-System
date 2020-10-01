const mongoose = require('mongoose');
const patient = mongoose.model('patient');

exports.list_all_patients = (req, res) => {
  patient.find({}, (err, patients) => {
    if (err) res.send(err);
    res.json(patients);
  });
};

exports.create_a_patient = (req, res) => {
  const newpatient = new patient(req.body);
  newpatient.save((err, patient) => {
    if (err) res.send(err);
    res.json(patient);
  });
};

exports.read_a_patient = (req, res) => {
  patient.findById(req.params.patientId, (err, patient) => {
    if (err) res.send(err);
    res.json(patient);
  });
};

exports.update_a_patient = (req, res) => {
  patient.findOneAndUpdate(
    { _id: req.params.patientId },
    req.body,
    { new: true },
    (err, patient) => {
      if (err) res.send(err);
      res.json(patient);
    }
  );
};

exports.delete_a_patient = (req, res) => {
  patient.deleteOne({ _id: req.params.patientId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'patient successfully deleted',
     _id: req.params.patientId
    });
  });
};