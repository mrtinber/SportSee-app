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