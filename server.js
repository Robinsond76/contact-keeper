const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API' })
);

//Define Routes
app.use('/api/users', require('./routers/users'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/contacts', require('./routers/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
