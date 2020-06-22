const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.port || 3000;

app.use(express.json())

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// ---------------------- Users --------------------
app.route('/users')
.get((req, res) => {
  User.find({}).then((users) => {
    res.send(users)
  }).catch((e) => {
    res.status(500).send(e)
  })
})
.post((req, res) => {
  const user = new User(req.body);
  user.save()
  .then(() => {res.status(201).send(user)})
  .catch((error) => {
    res.status(400).send(error);
  });
})

app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById(_id).then((user) => {
    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  }).catch((e) => {
    res.status(500).send()
  })
})

// -------------------- Tasks ------------------
app.route('/tasks')
.get((req, res) => {
  Task.find({}).then((users) => {
    res.send(users)
  }).catch((error) => {
    res.status(500).send()
  })
})
.post((req, res) => {
  const task = new Task(req.body);
  task.save()
  .then(() => res.status(201).send(task))
  .catch((e) => {
    res.status(400).send(e);
  });
})

app.get('/tasks/:id', (req, res) => {
  const _id = req.params.id
  Task.findById(_id).then((task) => {
    if(!task) return res.status(404).send();
    res.send(task);
  }).catch(error => res.status(500).send())
});
