export type UserPerformanceApi = {
    userId: number,
    kind: {
        [key: number]: string;
    },
    data: UserPerformanceData[]
}

export type UserPerformanceData = {
    value: number,
    kind: number
}