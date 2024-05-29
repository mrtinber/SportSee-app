import { userLoader } from "../services/userLoader";
import { UserActivity } from "../variables/types";

export const getActivity = async ({userId}: {userId : number}): Promise<UserActivity> => {
    return userLoader().getActivity({userId})
}