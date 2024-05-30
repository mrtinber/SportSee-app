import { User } from "./models/User";
import { UserActivity } from "./models/UserActivity";
import { UserPerformance } from "./models/UserPerformance";
import { UserSessions } from "./models/UserSessions";

export interface UserGateway {
    getUser({ userId }: { userId: number }): Promise<User>;
    getActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getPerformance({ userId }: { userId: number }): Promise<UserPerformance>;
    getSessions({userId}: {userId: number}): Promise<UserSessions>;
}