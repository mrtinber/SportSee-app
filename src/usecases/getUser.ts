import { userLoader } from "../services/userLoader";
import { User } from "../variables/types";

export const getUser = async ({ userId }: { userId: number }): Promise<User> => {
    return userLoader().getUser({userId})
}