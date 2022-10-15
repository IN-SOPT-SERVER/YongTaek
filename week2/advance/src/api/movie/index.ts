import express, {Router} from "express";
import { getMovies, addMovie } from "./movieService";
import { body } from "../../common/validator";
import { filterAddMovie } from "../../validation/movieValidator";
const router: Router = express.Router();

router.get("/", getMovies);
router.post("/",body(filterAddMovie), addMovie);

module.exports = router;

