const {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} = require("../controllers/companyController");

const express = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const { singleUpload } = require("../middleware/multer");

const router = express.Router();

router.route("/register").post(isAuthenticated, registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").put(isAuthenticated, singleUpload, updateCompany);

module.exports = router;
