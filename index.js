const express = require('express');
require('dotenv').config()

express()
  .use(express.static(`${__dirname}/src/build`))
  .get('*', (req, res) => res.sendFile(`${__dirname}/src/build/index.html`))
  .listen(process.env.PORT, () =>
    console.log('__SERVER_RUNNING__', process.env.REACT_APP_PORT));