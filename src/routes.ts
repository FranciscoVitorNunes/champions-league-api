import { Router } from "express";
import  getPlayer  from "./controllers/player-controller";

const router = Router()

router.get("/", getPlayer)

export default router;