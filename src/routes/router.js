"use strict";

const Router = require("express");
const router = Router();
const connection = require("../controllers/status");

router.get("/status", connection.status);

module.exports = router;