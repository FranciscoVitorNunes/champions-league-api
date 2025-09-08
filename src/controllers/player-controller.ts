import { Request, Response } from "express";
import { getPlayerService, getPlayerByIdService } from "../services/service-player";

const getPlayer = async(req: Request, res: Response)=>{
    const httpResponse = await getPlayerService();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}



export default getPlayer