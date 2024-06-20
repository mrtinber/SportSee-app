export type UserActivity = {
    userId: number,
    sessions: UserActivitySessions[]
}

export type UserActivitySessions = {
    day: string,
    kilogram: number,
    calories: number
}