import { Request, Response } from "express";
import { getPlayerService } from "../services/service-player";
import { ok } from "../utils/http-helper";

const getPlayer = async(req: Request, res: Response)=>{
    const data = getPlayerService;
    const response = await ok(data);
    res.status(response.statusCode).json(response.body);
}

export default getPlayer