const router = require('express').Router();
const userRoute = require('./userRoute');
const taskRoute = require('./taskRoute');

router.use('/user', userRoute);
router.use('/task', taskRoute);

module.exports = router;
