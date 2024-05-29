import { userLoader } from "../services/userLoader";

export const getPerformance = async ({userId}: {userId : number}) => {
    const userGateway = userLoader();
    return userGateway.getPerformance({userId})
}