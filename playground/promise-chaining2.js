require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("5ef1e522925f7c5b7f1b8e5a").then(task => {
//   console.log(task);
//   return Task.countDocuments({completed: false})
// }).then(result => console.log(result))
// .catch(e => console.log(e))

const deleteTaskAndCount = async(id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({completed});
  return count;
}

deleteTaskAndCount("5ef1f3db925f7c5b7f1b90be", false).then(count => console.log(count))
.catch(e => console.log(e))
