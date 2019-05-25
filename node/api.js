const express = require("express");
const router = express.Router();
require("./db")

router.use(require("./api_auth.js"));
router.use(require("./api_product.js"));
router.use(require("./api_transaction.js"));
router.use(require("./api_feedback.js"));

module.exports = router;

