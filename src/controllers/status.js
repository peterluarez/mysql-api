"use strict";

const mysql = require("mysql");
const config = require("../../config");
const connection = mysql.createPool(config.database); 

module.exports = {
  status: (req, res) => {
    try {
      connection.getConnection((err, connection) => {
        if (err) {
          console.error('Database Connection Failed:', err);
          return res.status(500).json({
            result: { 
              message: "Database Connection Failed",
            },
          });
        } 

        res.status(200).json({
          result: { 
            message: "Database Connection Success",
          },
        });
      });
    } catch (error) {
      res.status(500).json({
        error: config.app.environment === "development" ? error.message : null,
      });
    }
  },
};