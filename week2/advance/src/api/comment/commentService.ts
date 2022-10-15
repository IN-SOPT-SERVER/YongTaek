import { Request, Response } from "express";
import IComment from "../../interfaces/IComment";
import IMovie from "../../interfaces/IMovie";

const comments:IComment[] = [ 
    { 
        movieId: 1,
        comment:"아 가수 비 나오는지 알았으면 안보는건데",
        score: 1
    }
]

const movies:IMovie[] = [ 
    { 
        id: 1,
        title: "자전차왕 엄복동",
        audience: 10
    },
    {
        id: 2,
        title: "비상 선언",
        audience: 20
    },
    {
        id: 3,
        title: "염력",
        audience: 15
    },
    {
        id: 4,
        title: "7광구",
        audience: 25
    }
] 

/**
 * get movie comment
 *
 * @api {get} /api/comment
 */
export const getComment = (req: Request, res: Response) => {
    const movieId:number = Number(req.query.movieId);

    const movieInfo: IMovie | undefined = movies.find(element => {
        return element.id === movieId
    });

    if(!movieInfo){
        return res.status(400).send("invalid-movie");
    }

    const commentInfo: IComment[] = comments.filter(element => {
        return element.movieId === movieId;
    });

    return res.status(200).send(commentInfo);
}
