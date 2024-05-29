import { userLoader } from "../services/userLoader";
import { UserPerformance } from "../variables/types";

export const getPerformance = async ({userId}: {userId : number}): Promise<UserPerformance> => {
    return userLoader().getPerformance({userId})
}