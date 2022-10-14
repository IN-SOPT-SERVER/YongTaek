import { Request, Response } from "express";
import IMember from "../../interfaces/IMember";

const members:IMember[] = [ 
    { 
        name: "권세훈",
        group: "ob",
        menu: "봉구스"
    },
    {
        name: "이용택",
        group: "yb",
        menu: "봉구스햄"
    },
    {
        name: "장한빛",
        group: "yb",
        menu: "봉구스치즈"
    },
    {
        name: "정정빈",
        group: "ob",
        menu: "봉구스햄치즈"
    },
    {
        name: "백혜윤",
        group: "yb",
        menu: "봉구스제육"
    },
    {
        name:'남지윤',
        group: "ob",
        menu: "봉구스치즈제육"
    },
    {
        name:'전희선',
        group: "yb",
        menu: "봉구스김치제육"
    },
    {
        name:'양지영',
        group: "ob",
        menu: "봉구스닭갈비"
    },
    {
        name:'정준서',
        group: "yb",
        menu: "봉구스소불고기"
    },
    {
        name:'조예슬',
        group: "yb",
        menu: "봉구스청양불고기"
    },
    {
        name:'한유진',
        group: "ob",
        menu: "봉구스불족"
    },
    {
        name:'김민욱',
        group: "ob",
        menu: "봉구스맛있새우"
    }
]


/**
 * Get all member info 
 *
 * @api {get} /api/member
 */
export const getMembers = (req: Request, res: Response) => {
    return res.status(200).send(members);
}

/**
 * add member info
 *
 * @api {post} /api/member
 */
export const addMember = (req: Request, res: Response) => {
    const {name, group, menu} = req.body;
    members.push({
        name: name,
        group: group,
        menu: menu
    }) 
    console.log(members);
    return res.status(200).send(name);
}
