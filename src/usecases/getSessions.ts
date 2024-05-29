import { userLoader } from "../services/userLoader";
import { UserSessions } from "../variables/types";

export const getSessions = async ({userId}: {userId : number}): Promise<UserSessions> => {
    return userLoader().getSessions({userId})
}