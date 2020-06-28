const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user.js')
const taskRouter = require('./routers/task.js')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// const Task = require('./models/task');
// const User = require('./models/user')
// const main = async () => {
//   // const task = await Task.findById('5ef759e683ca5017e7528363');
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner);
//
//   const user = await User.findById('5ef756e774f5bd14eaff57d8');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }
//
// main()
