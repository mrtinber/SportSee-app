export type UserActivityApi = {
    userId: number,
    sessions: UserActivitySessions[]
}

export type UserActivitySessions = {
    day: string,
    kilogram: number,
    calories: number
}