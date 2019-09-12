const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 10
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

taskSchema.pre('save', async function (next) {
    const task = this;

    console.log('action to run before task save');

    next();
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task;