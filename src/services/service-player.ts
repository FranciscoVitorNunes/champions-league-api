import { findAllPlayers, getPlayerById } from "../repositories/player-repository";
import { noContent, ok } from "../utils/http-helper";

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

