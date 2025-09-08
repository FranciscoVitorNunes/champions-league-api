import express, {Request, Response} from 'express'

const app = express()

app.get("/", (req: Request, res: Response)=>{
    res.send("ola mundo!")
})


app.listen(3333, ()=>{
    console.log("server ligado...")
})



