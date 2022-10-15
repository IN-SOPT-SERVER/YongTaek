import { Request, Response } from "express";
import IMovie from "../../interfaces/IMovie";

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
 * Get all movie info 
 *
 * @api {get} /api/movie
 */
export const getMovies = (req: Request, res: Response) => {
    return res.status(200).send(movies);
}

/**
 * add movie info
 *
 * @api {post} /api/movie
 */
export const addMovie = (req: Request, res: Response) => {
    const { id, title, audience } = req.body;
    console.log(id);
    movies.push({
       id: id,
       title: title,
       audience: audience
    }) 
    console.log(movies);
    return res.status(200).send(title);
}
