import { Request, Response } from "express";
import { userService } from "../service";

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

// create user
const createUser = async (req: Request, res: Response) => {
    const {userName, email, age} = req.body;

    if (!userName) return res.status(404).json({ status: 400, message: "유저 생성 실패" });

    const data = await userService.createUser(userName, email, age);

    if (!data) {
      return res.status(404).json({ status: 400, message: "유저 생성 실패" });
    }

    return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

// get all user info
const getAllUser = async (req: Request, res: Response) => {
    const data = await userService.getAllUser();

    return res.status(200).json({ status: 200, message: "전체 유저 조회 성공", data });
};

// update user
const updateUser = async (req: Request, res: Response) => {
    const { name } = req.body;
    const { userId } = req.params;

    if (!name) return res.status(404).json({ status: 400, message: "유저 업데이트 실패" });

    const updateUser  = await userService.updateUser(+userId, name);
    return res.status(200).json({ status: 200, message: "유저 업데이트 성공", updateUser });
};

// delete user
const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    await userService.deleteUser(+userId);
    return res.status(200).json({ status: 200, message: "유저 삭제 성공"});
};


const userController = {
  getUserById,
  getAllUser,
  updateUser,
  createUser,
  deleteUser
};

export default userController;
