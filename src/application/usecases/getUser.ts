import { userLoader } from "../../infra/loaders/userLoader";
import { User } from "../../domain/types/User";

export const getUser = async ({ userId }: { userId: number }): Promise<User> => {
    return userLoader().getUser({userId})
}