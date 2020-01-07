const express = require('express');
const petController = require('../controller/petController');
const headerExtractor = require('../middelwares/extractor');

const router = express.Router();
//Find Pet by id
router.get('/:id', headerExtractor.headerExtractor, petController.petById);
//Find Pet by status (supplied bu query param)
router.get('/findByStatus', headerExtractor.headerExtractor, petController.petById);
//Update an existing pet
router.put('/',petController.updatePet);
//Updates a pet in the store with form data
router.post('/:id',petController.createPet);
//create a new pet
router.post('/',petController.createPet);
//Deletes a pet
router.delete(':id',petController.deletePetById);
//uploads an image
router.post('/:petId/uploadImage',petController.uploadImage);

module.exports = router;