import { userLoader } from "../../infra/loaders/userLoader";
import { UserSessions } from "../../domain/types/UserSessions";

export const getSessions = async ({userId}: {userId : number}): Promise<UserSessions> => {
    return userLoader().getSessions({userId})
}