const express = require("express");
const router = express.Router();
const {
  createApplication,
  getAllApplications,
  createEnqiry,
  getAllEnquiries
} = require("../controller/application.controller.js");

router.get("/", getAllApplications);
router.get("/enquiry", getAllEnquiries);
router.post("/", createApplication);
router.post("/enquiry", createEnqiry);

module.exports = router;
