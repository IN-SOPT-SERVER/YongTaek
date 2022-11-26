import { Request, Response } from "express";
import { userService } from "../service";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { rm, sc } from "../constants"
import { validationResult } from "express-validator";
import jwtHandler from "../modules/jwtHandler"
import { success, fail } from  "../constants/response"
import { UserSignInDTO } from "../interfaces/userSignInDTO";

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

  //? validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if(!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  }
  
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL))
  }

  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, data))
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
