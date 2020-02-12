const express = require('express');
const userRoutes = require('./../controllers/userController');
const router = express.Router();

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
