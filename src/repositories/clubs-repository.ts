import {clubModel} from '../models/club-model'

const database: clubModel[]=[
    {
        id: 1,
        name: "Inter Miami",
    },
    {
        id: 2,
        name: "Al Nassr",
    },
    {
        id: 3,
        name: "Manchester City",
    },
    {
        id: 4,
        name: "Paris Saint-Germain",
    },
    {
        id: 5,
        name: "FC Barcelona",
    }
]

export const findAllClubs = async():Promise<clubModel[]> =>{
    return database;
}