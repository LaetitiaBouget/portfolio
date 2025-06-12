const express = require('express');
const router = express.Router();
const projectsCtrl = require('../controllers/projectControllers');

router.get('/', projectsCtrl.getAllProjects);
router.post('/', projectsCtrl.createProject);
router.get('/:id', projectsCtrl.getOneProject);
router.put('/:id', projectsCtrl.modifyProject);
router.delete('/:id', projectsCtrl.deleteProject);


module.exports = router;