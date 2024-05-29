import { userLoader } from "../services/userLoader";

export const getSessions = async ({userId}: {userId : number}) => {
    const userGateway = userLoader();
    return userGateway.getSessions({userId})
}