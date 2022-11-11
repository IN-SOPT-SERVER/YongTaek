import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

// create user
router.post("/", userController.createUser);

// get all user info
router.get("/", userController.getAllUser);

// update user
router.patch("/:userId", userController.updateUser);

// delete user
router.delete("/:userId", userController.deleteUser);

export default router;
