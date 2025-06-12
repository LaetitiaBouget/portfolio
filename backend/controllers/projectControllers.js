const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error });
    }
} 

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json({ message: 'Projet crée', project });
    } catch (error) {
        res.status(500).json({ message:'Erreur serveur', error });
    }
};

exports.getOneProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.modifyProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
        res.status(200).json({ message: 'Projet supprimé' });
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};