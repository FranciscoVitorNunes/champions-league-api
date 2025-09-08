import { Router } from "express";
import  {getPlayer, getPlayerBiId, postPlayer}  from "./controllers/player-controller";

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerBiId)
router.post("/players/", postPlayer)
router.delete("/players/:id", getPlayer)
router.patch("/players/:id", getPlayer)

export default router;