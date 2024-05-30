import { userLoader } from "../../infra/userLoader";
import { UserActivity } from "../models/UserActivity";

export const getActivity = async ({userId}: {userId : number}): Promise<UserActivity> => {
    return userLoader().getActivity({userId})
}