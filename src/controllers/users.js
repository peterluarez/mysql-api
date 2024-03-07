"use strict";

const pg = require("pg");
const config = require("../../config");
const pool = new pg.Pool(config.database);
const isConnected = pool.connect();

module.exports = {
  // to show db if connected or not
  status: (req, res) => {
    try {
      if (!isConnected)
        return res.status(500).json({
          result: { 
            message: "Database Connection Failed",
          },
        });
      res.status(200).json({
        result: { 
          message: "Database Connection Success",
        },
      });
    } catch (error) {
      res.status(500).json({
        error: config.app.environment === "development" ? error.message : null,
      });
    }
  },
};
