const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.route('/tasks')
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

router.route('/tasks/:id')
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
.delete(async (req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) res.status(404).send()
    res.send(task)
  } catch(e) {
    res.status(500).send()
  }
})

module.exports = router;
