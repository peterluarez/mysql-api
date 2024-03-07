"use strict";

const express = require("express");
const app = express();
const config = require("../config");   
const router = require("../src/routes/router");
 
app.use(express.json()); 

app.use(`/${config.app.name}/api/${config.app.version}`, router);

module.exports = {
  listen: app.listen(config.app.port, (req, res) => {
    try {
      console.log(`[API] App started and listening on port ${config.app.port},'\n[DATABASE] App is connected to database`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }),
};
