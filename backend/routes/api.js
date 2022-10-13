const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const createUserValidation = require('../validations/createUserValidation');
const updateUserValidation = require('../validations/updateUserValidation');

router.get('/users',appController.index);
router.post('/users',[createUserValidation],appController.create);
router.post('/users/:id',[updateUserValidation],appController.update);
router.post('/users-delete',appController.delete);

module.exports  = router;