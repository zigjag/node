//https://mongoosejs.com/docs/api.html

// -----------------------Setup----------------------
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

//--------------------Create and Save Document Model------------------
const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    validate: (value) => {
      if(value < 0){
        throw new Error("Age must be a positive number.");
      }
    }
  }
});

const me = new User({
  name: "Joseph",
  age: 29
})

me.save().then(() => { //can use the data returned instead, e.g. result
  console.log(me)
}).catch((error) => {
  console.log(error)
})

//------------------------Find Methods--------------------
User.findById(_id).then((user) => {
  if(!user){
    return res.status(404).send()
  }
  res.send(user)
}).catch((e) => {
  res.status(500).send()
})

//---------------------Insert Methods----------------


//---------------------Update Methods----------------
User.findByIdAndUpdate("5ef05d9e79394c88325ebe92", {age: 1}).then((user) => {
  console.log(user);
  return User.countDocuments({age: 30})
}).then((result) => {
  console.log(result)
}).catch(e => console.log(e))

//---------------------Delete Methods----------------
Task.findByIdAndDelete("5ef1e522925f7c5b7f1b8e5a").then(task => {
  console.log(task);
  return Task.countDocuments({completed: false})
}).then(result => console.log(result))
.catch(e => console.log(e))
