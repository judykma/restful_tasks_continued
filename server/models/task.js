const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        minlength: 3,
    },
    description: {
        type: String, 
        default: '',
    },
    completed: {
        type: Boolean, 
        default: false
    },
}, {timestamps: true});

var Task = mongoose.model('Task', TaskSchema);

module.exports = Task;