const taskRoute = require('express').Router();
const newTask = require('../controllers/Task/newTask');
const getTask = require('../controllers/Task/getTaskById');
const getAllTasks = require('../controllers/Task/getAllTask');
const deleteTask = require('../controllers/Task/deleteTask');
const updateTask = require('../controllers/Task/updateTask');

taskRoute.get('/', getAllTasks);
taskRoute.post('/newTask', newTask);
taskRoute.get('/getTask/:id', getTask);
taskRoute.delete('/delete/:id', deleteTask);
taskRoute.put('/update/:id', updateTask);

module.exports = taskRoute;
