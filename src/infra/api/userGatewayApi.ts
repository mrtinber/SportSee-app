import { User } from "../../domain/models/User";
import { UserActivity } from "../../domain/models/UserActivity";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { UserSessions } from "../../domain/models/UserSessions";

export interface UserGatewayApi {
    getUser({ userId }: { userId: number }): Promise<User>;
    getActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getPerformance({ userId }: { userId: number }): Promise<UserPerformance>;
    getSessions({userId}: {userId: number}): Promise<UserSessions>;
}