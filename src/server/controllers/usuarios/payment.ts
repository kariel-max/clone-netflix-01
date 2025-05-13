import {RequestHandler} from "express";
import path from "path";

export const payment: RequestHandler = (req, res)=> {
    res.sendFile(path.join(__dirname, '../../../../paymentPicker.html'))
}