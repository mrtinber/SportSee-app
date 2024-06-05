export type UserSessionsApi = {
    userId: number,
    sessions: UserSession[]
}

export type UserSession = {
    day: number,
    sessionLength: number
}