export type User = {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore?: number;
    score?: number;
    keyData: {
        calorieCount: number,
        proteinCount: number,
        carbohydrateCount: number,
        lipidCount: number,
    }
};

export type UserActivity = {
    userId: number,
    sessions: Array<{
        day: string,
        kilogram: number,
        calories: number
    }>
}

export type UserPerformance = {
    userId: number,
    kind: {
        [key: number]: string;
    },
    data: Array<{
        value: number,
        kind: number
    }>
}

export type UserSessions = {
    userId: number,
    sessions: Array<{
        day: number,
        sessionLength: number
    }>
}