const express = require('express');
const taskController = require('../controllers/taskController');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// Protect all task routes
router.use(authMiddleware);

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
