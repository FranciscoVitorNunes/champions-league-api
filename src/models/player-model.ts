export interface playerUnique{
    id: number,
    name: string,
    club: string,
    nacionality: string,
    position:  string,
    statistic: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical:number
    }
}