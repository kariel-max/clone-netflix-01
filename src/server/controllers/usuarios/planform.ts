import {RequestHandler} from "express";
import path from "path";
export const planform: RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname, '../../../../planform.html'))
}