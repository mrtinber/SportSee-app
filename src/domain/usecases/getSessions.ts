import { userLoader } from "../../infra/userLoader";
import { UserSessions } from "../models/UserSessions";

export const getSessions = async ({userId}: {userId : number}): Promise<UserSessions> => {
    return userLoader().getSessions({userId})
}