import { Request, Response } from "express";
import { getPlayerService, getPlayerByIdService, createPlayerService, deletePlayerService } from "../services/service-player";

export const getPlayer = async(req: Request, res: Response)=>{
    const httpResponse = await getPlayerService();
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
export const getPlayerBiId = async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await getPlayerByIdService(id);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}
export const postPlayer = async(req:Request, res:Response)=>{
    const bodyValue = req.body
    const httpResponse = await createPlayerService(bodyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}
export const deletePlayerBiId = async(req:Request, res:Response)=>{
    const id = parseInt(req.params.id)
    const httpResponse = await deletePlayerService(id);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

