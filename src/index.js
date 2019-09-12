const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {
//     res.status(503).send('Site under maintenance. Come back soon.')
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
