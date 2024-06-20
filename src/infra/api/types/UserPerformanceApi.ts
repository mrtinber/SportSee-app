export type UserPerformanceApi = {
    userId: number,
    kind: {
        [key: number]: string;
    },
    data: UserPerformanceApiData[]
}

export type UserPerformanceApiData = {
    value: number,
    kind: number
}