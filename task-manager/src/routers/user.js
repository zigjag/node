const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.route('/users')
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

router.route('/users/:id')
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

module.exports = router;
