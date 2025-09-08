import express, {Request, Response, json} from 'express'

export function createApp(){
    const app = express();
    app.use(json());
    app.get("/", (req: Request, res: Response)=>{
        res.json({"ola":" mundo!"})
    });
    return app;
}