const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();


const { DB, PORT } = require("../config");

// Get Records
router.get('/', async (req, res) => {
    const records = await loadRecordsCollection();
    res.send(await records.find({}).toArray());
});

// Add Record
// router.post('/', async (req, res) => {
//     const records = await loadRecordsCollection();
//     await records.insertOne({
//         task: req.body.text,
//         createdAt: new Date()
//     });
//     res.status(201).send();
// });

// Delete Record
// router.delete('/:id', async (req, res) => {
//     const records = await loadRecordsCollection();
//     await records.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
//     res.status(200).send({});
// });

async function loadRecordsCollection() {
    const client = await mongodb.MongoClient.connect
    (DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('Dentist').collection('patientrecords');
}

module.exports = router;