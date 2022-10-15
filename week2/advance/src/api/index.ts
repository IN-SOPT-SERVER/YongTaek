import express, { Router } from "express";

const router: Router = express.Router(); 

router.use("/user", require("./user"));
router.use("/member", require("./members"));
router.use("/movie", require("./movie"));
router.use("/blog", require("./blog"));
router.use("/comment", require("./comment"));

module.exports = router; 