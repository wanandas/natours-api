const express = require('express');
const userRoutes = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);

router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);

router.patch('/updateMe', authController.protect, userRoutes.updateMe);
router.delete('/deleteMe', authController.protect, userRoutes.deleteMe);

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
