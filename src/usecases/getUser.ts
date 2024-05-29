import { userLoader } from "../services/userLoader";

export const getUser = async ({userId}: {userId : number}) => {
    const userGateway = userLoader();
    return userGateway.getUser({userId})
}