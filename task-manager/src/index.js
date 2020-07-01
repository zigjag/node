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
