import { User } from "../../domain/types/User";
import { UserActivity } from "../../domain/types/UserActivity";
import { UserPerformance } from "../../domain/types/UserPerformance";
import { UserSessions } from "../../domain/types/UserSessions";

export interface UserGateway {
    getUser({ userId }: { userId: number }): Promise<User>;
    getActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getPerformance({ userId }: { userId: number }): Promise<UserPerformance>;
    getSessions({userId}: {userId: number}): Promise<UserSessions>;
}