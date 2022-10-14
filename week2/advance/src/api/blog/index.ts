import express, {Router} from "express";
import { addBlogPost } from "./blogService";
import { body } from "../../common/validator";
import { filterAddPost } from "../../validation/blogValidator";
const router: Router = express.Router();

router.post("/",body(filterAddPost), addBlogPost);

module.exports = router;

