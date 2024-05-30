import { userLoader } from "../../infra/userLoader";
import { UserPerformance } from "../models/UserPerformance";

export const getPerformance = async ({userId}: {userId : number}): Promise<UserPerformance> => {
    return userLoader().getPerformance({userId})
}