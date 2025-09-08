import { playerUnique } from "../models/player-model";
import { deletePlayer, findAllPlayers, getPlayerById, insertPlayer } from "../repositories/player-repository";
import { badRequest, noContent, ok, created } from "../utils/http-helper";

export const getPlayerService = async () =>{
    const data = await findAllPlayers()
    let response = null

    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}
export const getPlayerByIdService = async(id: number) =>{
    const data = await getPlayerById(id)
    let response = null

    if(data){
        response = await ok(data);
    }else{
        response = await noContent();
    }
    return response;
}

export const createPlayerService = async(player: playerUnique) =>{
    let response = null;
    if(Object.keys(player).length !== 0){
        await insertPlayer(player);
        return response = created();
    }else{
        return badRequest();
    }
}
export const deletePlayerService = async(id: number) =>{
    await deletePlayer(id)
    let response = null
    
    response = await ok({message: "Deleted"});
    return response;
}