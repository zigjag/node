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
.get(async (req, res) => {
  await User.find({})
  .then((result) => res.send(result))
  .catch(e => res.status(500).send(e))
})
.post(async (req, res) => {
  const user = new User(req.body);

  try{
    await user.save()
    res.status(201).send(user)
  } catch (e) {
    res.status(400).send(e)
  }
})

app.route('/users/:id')
.get(async (req, res) => {
  const _id = req.params.id;
  try{
    const user = await User.findById({_id})
    if(!user) return res.status(404).send();

    res.send(user)
  } catch(e) {
    res.status(500).send();
  }
})
.patch(async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if(!isValidOperation){
    return res.status(400).send({"error": "Invalid updates!"})
  }

  try{
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true})

    if(!user) return res.status(404).send();
    res.send(user);
  } catch(e){
    res.status(400).send(e);
  }
})
.delete(async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id)
    if(!user) res.status(404).send()
    res.send(user)
  } catch(e){
    res.status(500).send()
  }
})


// -------------------- Tasks ------------------
app.route('/tasks')
.get(async (req, res) => {
  try{
    const tasks = await Task.find({})
    res.send(tasks)
  } catch(e) {
    res.status(500).send(e)
  }
})
.post(async (req, res) => {
  const task = new Task(req.body);
  try{
    await task.save()
    res.status(201).send(task)
  } catch(e) {
    res.status(404).send(e)
  }
})

app.route('/tasks/:id')
.get(async (req, res) => {
  const _id = req.params.id
  try {
    const task = await Task.find({_id});
    if(!task) res.status(404).send('Does not exist');
    res.send(task);
  } catch(e) {
    res.status(404).send(e)
  }
})
.patch(async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"]
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if(!isValidOperation) return res.status(400).send({ "Error": "Invalid updates!"});

  try{
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidator: true});
    if(!task) res.status(404).send('Does not Exist')
    res.send(task)
  } catch(e){
    res.status(400).send(e)
  }
})
