import { userLoader } from "../../infra/loaders/userLoader";
import { UserActivity } from "../../domain/types/UserActivity";

export const getActivity = async ({userId}: {userId : number}): Promise<UserActivity> => {
    return userLoader().getActivity({userId})
}