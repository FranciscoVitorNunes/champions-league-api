import { playerUnique } from "../models/player-model";
const database: playerUnique[]=[
    {id:1, name:"messi"},
    {id:2, name:"CR7"}
];

export const findAllPlayers = async(): Promise<playerUnique[] >=>{
    return database;
}

export const getPlayerById = async(id:number): Promise<playerUnique | undefined>=>{
    return database.find( player => player.id == id)
}