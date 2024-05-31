export type UserPerformance = {
    userId: number,
    data: UserPerformanceData[]
}

export type UserPerformanceData = {
    value: number,
    kind: string
}