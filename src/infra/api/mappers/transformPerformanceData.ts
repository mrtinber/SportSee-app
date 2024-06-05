import { UserPerformance } from "../../../domain/models/UserPerformance";
import { UserPerformanceApi, UserPerformanceApiData } from "../models/UserPerformanceApi";

type transformPerformanceDataFn = (data:UserPerformanceApi) => UserPerformance

export const transformPerformanceData: transformPerformanceDataFn = (data) => {
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