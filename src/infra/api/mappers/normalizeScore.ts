import { User } from "../../../domain/models/User";
import { UserApi } from "../models/UserApi";

export const normalizeScore = (data: UserApi): User => {
    const normalizedScore = data.todayScore !== undefined ? data.todayScore : data.score !== undefined ? data.score : 0;

    const normalizedData: User = {
        id: data.id,
        userInfos: data.userInfos,
        todayScore: normalizedScore,
        keyData: data.keyData,
    };

    return normalizedData;
};