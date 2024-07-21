

export interface resSliceAPI {
    count: number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        height: string,
        mass: string,
        hair_color: string,
        skin_color: string,
        isActive: boolean
    }[]
}