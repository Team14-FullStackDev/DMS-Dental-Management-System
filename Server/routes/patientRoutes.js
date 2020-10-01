const patientBuilder = require('../controllers/patientController');

module.exports = app => {
  app
    .route('/patients')
    .get(patientBuilder.list_all_patients)
    .post(patientBuilder.create_a_patient);

  app
    .route('/patients/:patientId')
    .get(patientBuilder.read_a_patient)
    .put(patientBuilder.update_a_patient)
    .delete(patientBuilder.delete_a_patient);
};