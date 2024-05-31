export type UserSessions = {
    userId: number,
    sessions: UserSessionsArray[]
}

export type UserSessionsArray = {
    day: number,
    sessionLength: number
}