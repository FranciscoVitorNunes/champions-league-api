import { Router } from "express";
import  {deletePlayerBiId, getPlayer, getPlayerBiId, postPlayer, patchPlayer}  from "./controllers/player-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerBiId)
router.post("/players/", postPlayer)
router.delete("/players/:id", deletePlayerBiId)
router.patch("/players/:id", patchPlayer)

router.get("/clubes", getClubs)
export default router;