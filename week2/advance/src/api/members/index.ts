import express, {Router} from "express";
import { getMembers, addMember } from "./memberService";
import { body, query } from "../../common/validator";
import { filterAddMember } from "../../validation/memberValidator";
const router: Router = express.Router();

router.get("/", getMembers);
router.post("/",body(filterAddMember), addMember);

module.exports = router;

