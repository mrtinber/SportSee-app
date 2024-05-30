import { User } from "../models/User";

export const scoreInPercentage = (data: User): number => {
    return data.todayScore !== undefined ? data.todayScore : data.score !== undefined ? data.score : 0;
};