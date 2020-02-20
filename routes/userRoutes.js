const express = require('express');
const userRoutes = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(userRoutes.getAllUsers)
  .post(userRoutes.createUser);

router
  .route('/:id')
  .get(userRoutes.getUser)
  .patch(userRoutes.updateUser)
  .delete(userRoutes.deleteUser);

module.exports = router;
