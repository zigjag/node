require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate("5ef05d9e79394c88325ebe92", {age: 1}).then((user) => {
//   console.log(user);
//   return User.countDocuments({age: 30})
// }).then((result) => {
//   console.log(result)
// }).catch(e => console.log(e))

const updateAndCount = async(id, age) => {
  const user = await User.findByIdAndUpdate(id, {age});
  const count = await User.countDocuments({age});
  return count;
}

updateAndCount("5ef05d9e79394c88325ebe92", 0).then((count) => console.log(count))
.catch(e => console.log(e))
