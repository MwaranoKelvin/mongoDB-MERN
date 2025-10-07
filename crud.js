const { connectDB, mongoose } = require('./db');
const { User } = require('./Models/User');
const { Task } = require('./Models/Task');


async function main(){
    await connectDB(); 

    // CREATE

    const John = await User.create({ name: "John  Wachira", email: "john@example.com"});
    console.log("Created User:", John);

    // READ 

    const users = await User.find().select("name email");
    console.log("All Users:", users);

    // UPDATE
    await User.updateOne({email: "john@example.com"}, {role: "Admin"});
    console.log("Updated John's role to Admin");

    // DELETE
    await User.deleteOne({email: "john@example.com"});
    console.log("Bye John");

    // AGGREGATION

    const byStatus = await Task.aggregate([
        { $group: { _id: "$status", total: { $sum: 1}}}
    ]);
    console.log("Tasks by Status:", byStatus);

    await mongoose.disconnect();
}
main();