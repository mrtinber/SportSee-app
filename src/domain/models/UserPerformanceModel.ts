import { UserPerformanceApi, UserPerformanceApiData } from "../../infra/api/types/UserPerformanceApi";
import { UserPerformanceData } from "../types/UserPerformance";

export class UserPeformanceModel {
    userId: number;
    data: UserPerformanceData[];
    /**
 * Create user performance data model.
 * @param {UserActivity} data - The data value
 */
    constructor(data: UserPerformanceApi) {
        this.userId = data.userId;
        this.data = this.transformPerformanceData(data);
    }

    /**
 * Transform the sessions data from the API.
 * @param {UserPerformanceApi} data - The data value from API
 * @return {UserPerformanceData[]} The transformed sessions
 */
    private transformPerformanceData(data: UserPerformanceApi): UserPerformanceData[] {
        return data.data.map((item: UserPerformanceApiData) => {
            const kindString = data.kind[item.kind];
            return {
                value: item.value,
                kind: kindString.charAt(0).toUpperCase() + kindString.slice(1),
            };
        });
    }
}