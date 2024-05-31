export type UserPerformance = {
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