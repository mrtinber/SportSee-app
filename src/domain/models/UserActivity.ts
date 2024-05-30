export type UserActivity = {
    userId: number,
    sessions: Array<{
        day: string,
        kilogram: number,
        calories: number
    }>
}