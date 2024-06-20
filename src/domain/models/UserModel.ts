import { UserKeyData } from "../types/User";
import { UserApi } from "../../infra/api/types/UserApi";

export class UserModel {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore: number;
    keyData: UserKeyData;

    /**
     * Create user performance data model.
     * @param {UserApi} data - The data value from API
     */
    constructor(data: UserApi) {
        this.id = data.id;
        this.userInfos = data.userInfos;
        this.todayScore = this.normalizeScore(data);
        this.keyData = data.keyData;
    }

    /**
     * Normalize the score from the API data.
     * @param {UserApi} data - The data value from API
     * @return {number} The normalized score
     */
    private normalizeScore(data: UserApi): number {
        return data.todayScore !== undefined ? data.todayScore : data.score !== undefined ? data.score : 0;
    }
}