import { playerUnique } from "../models/player-model";
import { playerStatistics } from "../models/statistics-player-model";
const database: playerUnique[]=[
    {
        id: 1, 
        name: "Lionel Messi",
        club: "Inter Miami",
        nacionality: "Argentina",
        position: "Forward",
        statistic: {
            Overall: 98,
            Pace: 85,
            Shooting: 95,
            Passing: 92,
            Dribbling: 99,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 2, 
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nacionality: "Portugal",
        position: "Forward",
        statistic: {
            Overall: 96,
            Pace: 87,
            Shooting: 97,
            Passing: 84,
            Dribbling: 89,
            Defending: 42,
            Physical: 78
        }
    },
    {
        id: 3, 
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nacionality: "Belgium",
        position: "Midfielder",
        statistic: {
            Overall: 94,
            Pace: 76,
            Shooting: 88,
            Passing: 96,
            Dribbling: 89,
            Defending: 68,
            Physical: 79
        }
    },
    {
        id: 4, 
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nacionality: "France",
        position: "Forward",
        statistic: {
            Overall: 97,
            Pace: 99,
            Shooting: 93,
            Passing: 83,
            Dribbling: 95,
            Defending: 45,
            Physical: 82
        }
    },
    {
        id: 5, 
        name: "Virgil van Dijk",
        club: "Liverpool",
        nacionality: "Netherlands",
        position: "Defender",
        statistic: {
            Overall: 92,
            Pace: 80,
            Shooting: 65,
            Passing: 85,
            Dribbling: 75,
            Defending: 95,
            Physical: 88
        }
    },
    {
        id: 6, 
        name: "Erling Haaland",
        club: "Manchester City",
        nacionality: "Norway",
        position: "Forward",
        statistic: {
            Overall: 95,
            Pace: 89,
            Shooting: 96,
            Passing: 72,
            Dribbling: 82,
            Defending: 48,
            Physical: 90
        }
    },
    {
        id: 7, 
        name: "Luka Modrić",
        club: "Real Madrid",
        nacionality: "Croatia",
        position: "Midfielder",
        statistic: {
            Overall: 91,
            Pace: 75,
            Shooting: 82,
            Passing: 93,
            Dribbling: 91,
            Defending: 75,
            Physical: 72
        }
    },
    {
        id: 8, 
        name: "Robert Lewandowski",
        club: "Barcelona",
        nacionality: "Poland",
        position: "Forward",
        statistic: {
            Overall: 94,
            Pace: 78,
            Shooting: 95,
            Passing: 79,
            Dribbling: 86,
            Defending: 45,
            Physical: 85
        }
    },
    {
        id: 9, 
        name: "Neymar Jr",
        club: "Al Hilal",
        nacionality: "Brazil",
        position: "Forward",
        statistic: {
            Overall: 93,
            Pace: 90,
            Shooting: 86,
            Passing: 88,
            Dribbling: 96,
            Defending: 38,
            Physical: 65
        }
    },
    {
        id: 10, 
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nacionality: "Germany",
        position: "Midfielder",
        statistic: {
            Overall: 90,
            Pace: 75,
            Shooting: 78,
            Passing: 91,
            Dribbling: 85,
            Defending: 87,
            Physical: 82
        }
    },
    {
        id: 11, 
        name: "Thibaut Courtois",
        club: "Real Madrid",
        nacionality: "Belgium",
        position: "Goalkeeper",
        statistic: {
            Overall: 93,
            Pace: 45,
            Shooting: 25,
            Passing: 75,
            Dribbling: 50,
            Defending: 92,
            Physical: 85
        }
    },
    {
        id: 12, 
        name: "Karim Benzema",
        club: "Al Ittihad",
        nacionality: "France",
        position: "Forward",
        statistic: {
            Overall: 92,
            Pace: 80,
            Shooting: 93,
            Passing: 82,
            Dribbling: 88,
            Defending: 42,
            Physical: 78
        }
    }
];

export const findAllPlayers = async(): Promise<playerUnique[] >=>{
    return database;
}

export const getPlayerById = async(id:number): Promise<playerUnique | undefined>=>{
    return database.find( player => player.id == id)
}

export const insertPlayer = async(player: playerUnique) =>{
    database.push(player)
}

export const deletePlayer = async(id: number)=>{
    const index = database.findIndex((player) => player.id == id)
    if(index !==-1){
        database.splice(index, 1)
        return true
    }
    return false
}

export const findAndModifyPlayer = async(id: number, statistics: playerStatistics) =>{
    const playerIndex = database.findIndex((player) => player.id == id)
    if(playerIndex!==-1){
        database[playerIndex].statistic = statistics;
    }
}