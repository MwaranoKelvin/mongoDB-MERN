const { connectDB, mongoose } = require('./db');
const { User } = require('./Models/User');
const { Task } = require('./Models/Task');

async function main() {
    await connectDB();

    await User.deleteMany({});
    await Task.deleteMany({}); // Clear existing tasks in the DB

    await User.insertMany([
        { name: "Alice Morgan", email: "alice@example.com", role: "Admin"},
        { name: "Bob Marshal", email: "bob@example.com" }
    ]);
    await Task.insertMany([
        { title: "Design Database Schema", status: "todo", owner: "Alice Morgan" },
        { title: "Implement Authentication", status: "in_progress", owner: "Bob Marshal"} 
    ]);

    console.log("Data populated successfully");
    await mongoose.disconnect();
}
main();