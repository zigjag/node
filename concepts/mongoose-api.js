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


//---------------------Delete Methods----------------
