import { UserPerformance } from "../../../domain/models/UserPerformance";
import { UserPerformanceApi, UserPerformanceApiData } from "../models/UserPerformanceApi";

export function transformPerformanceData(data: UserPerformanceApi): UserPerformance {
    const transformedData = data.data.map((item: UserPerformanceApiData) => {
        const kindString = data.kind[item.kind];
        return {
            value: item.value,
            kind: kindString.charAt(0).toUpperCase() + kindString.slice(1),
        };
    });

    return {
        userId: data.userId,
        data: transformedData,
    };
}