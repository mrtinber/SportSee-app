import { UserPerformance } from "../models/UserPerformance";

export function transformPerformanceData (data: UserPerformance) {
    return data.data.map(item => ({
        value: item.value,
        kind: data.kind[item.kind].charAt(0).toUpperCase() + data.kind[item.kind].slice(1)
    }));
} 