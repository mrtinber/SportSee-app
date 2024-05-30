export type UserSessions = {
    userId: number,
    sessions: Array<{
        day: number,
        sessionLength: number
    }>
}