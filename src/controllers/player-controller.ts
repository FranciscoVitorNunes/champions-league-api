import { Request, Response } from "express";

const getPlayer = (req: Request, res: Response)=>{
        res.json({"ola":" mundo!"})
}

export default getPlayer