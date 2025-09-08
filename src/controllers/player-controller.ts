import { Request, Response } from "express";
import { getPlayerService } from "../services/service-player";

const getPlayer = (req: Request, res: Response)=>{
    const data = getPlayerService;
    res.status(200).json(data);
}

export default getPlayer