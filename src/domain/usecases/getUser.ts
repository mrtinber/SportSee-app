import { userLoader } from "../../infra/userLoader";
import { User } from "../models/User";

export const getUser = async ({ userId }: { userId: number }): Promise<User> => {
    return userLoader().getUser({userId})
}