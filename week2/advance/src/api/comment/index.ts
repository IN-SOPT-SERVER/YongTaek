import express, {Router} from "express";
import { getComment } from "./commentService";
import { query } from "../../common/validator";
import { filterGetComment } from "../../validation/commentValidator";
const router: Router = express.Router();

router.get("/", query(filterGetComment), getComment);

module.exports = router;

