const mongoose = require('mongoose');

const projectSchema = mongoose.Schema ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    client: { type: String, required: true },
    url: String,
    coverImage: String,
    images: [String],
    clientObjectives: [String],
    missions: [String],
    techStack: [String],
    deliveryDate: { type: Date, required: true }
});

module.exports = mongoose.model('Project', projectSchema);