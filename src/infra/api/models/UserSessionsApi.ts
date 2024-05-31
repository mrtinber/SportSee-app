export type UserSessionsApi = {
    userId: number,
    sessions: UserSessionsArray[]
}

export type UserSessionsArray = {
    day: number,
    sessionLength: number
}