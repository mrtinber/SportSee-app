import { User, UserActivity, UserPerformance, UserSessions } from "../variables/types";

export interface UserGateway {
    getUser({ userId }: { userId: number }): Promise<User>;
    getActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getPerformance({ userId }: { userId: number }): Promise<UserPerformance>;
    getSessions({userId}: {userId: number}): Promise<UserSessions>;
}