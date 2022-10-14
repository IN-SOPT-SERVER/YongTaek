import { Request, Response } from "express";
import IUser from "../../interfaces/IUser";

const userData: IUser[] = [
    {
        id: 1,
        name: '이용택'
    },
    {
        id: 2,
        name: "장한빛"
    },
    {
        id: 3,
        name: "백혜윤"
    },
    {
        id: 4,
        name: "정정빈"
    }
]

/**
 * Get user info by id number
 *
 * @api {get} /api/user
 */
export const me = (req: Request, res: Response) => {
    const userId:number = Number(req.query.userId);
    const userInfo: IUser | undefined = userData.find(element => {
        return element.id === userId
    });

    if(!userInfo){
        return res.status(400).send("invalid-user");
    }

    return res.status(200).send(userInfo);
}
