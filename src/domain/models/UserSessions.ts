export type UserSessions = {
    userId: number,
    sessions: UserSession[]
}

export type UserSession = {
    day: string,
    sessionLength: number
}