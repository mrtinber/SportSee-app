import { userLoader } from "../../infra/loaders/userLoader";
import { UserPerformance } from "../../domain/types/UserPerformance";

export const getPerformance = async ({userId}: {userId : number}): Promise<UserPerformance> => {
    return userLoader().getPerformance({userId})
}