import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator"

const router: Router = Router();

router.get("/:userId", auth, userController.getUserById);

// create user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
);

// get all user info
router.get("/", userController.getAllUser);

// update user
router.patch("/:userId", userController.updateUser);

// delete user
router.delete("/:userId", userController.deleteUser);

export default router;
