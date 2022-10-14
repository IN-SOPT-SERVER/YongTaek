import { Request, Response } from "express";
import IBlog from "../../interfaces/IBlog";

const Posts:IBlog[] = [ 
    { 
        title: "과제를 해보며(1)",
        content:"너무 졸렸었따"
    }
]

/**
 * add blog post
 *
 * @api {post} /api/blog
 */
export const addBlogPost = (req: Request, res: Response) => {
    const {title, content} = req.body;
    Posts.push({
        title: title,
        content: content
    }) 
    console.log(Posts);
    return res.status(200).send(title);
}
