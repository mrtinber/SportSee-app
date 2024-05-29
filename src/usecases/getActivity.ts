import { userLoader } from "../services/userLoader";

export const getActivity = async ({userId}: {userId : number}) => {
    const userGateway = userLoader();
    return userGateway.getActivity({userId})
}