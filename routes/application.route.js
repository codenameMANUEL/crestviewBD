const express = require("express");
const router = express.Router();
const Application = require("../models/application.model.js");
const {
  createApplication,
  getAllApplications,
} = require("../controller/application.controller.js");

router.get("/", getAllApplications);
router.post("/", createApplication);

module.exports = router;
