const router = require('express').Router();
const userController = require('./userController');

router.post("/signup", userController.signup);
router.post("/login", userController.login);

module.exports = router;