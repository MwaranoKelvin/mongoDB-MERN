const { mongoose } = require("../db");
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    status: { type: String, enum: ["todo", "in_progress", "done"], default: "todo" },
    owner: String
}, {timestamps: true} );

const Task = mongoose.model('Task', taskSchema);

module.exports = { Task };

// Enumaration allows the user to select only one value from a predefined list of values