import express, { Router } from "express";
import { me } from "./userService";
import { query } from "../../common/validator";
import { filterMe } from "../../validation/userValidator";
const router: Router = express.Router();

router.get("/", query(filterMe), me);

module.exports = router;

