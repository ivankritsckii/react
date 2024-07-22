export interface todo {
    count:number,
    results: {
        name: string, 
        height: string,
        mass: string,
        isActive: boolean
    }[]
}