export type UserSessions = {
    userId: number,
    sessions: UserSessionsArray[]
}

export type UserSessionsArray = {
    day: string,
    sessionLength: number
}