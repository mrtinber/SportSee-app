import { BASE_URL } from "../constants/api";
import { UserActivity } from "../../domain/types/UserActivity";
import { UserSessions } from "../../domain/types/UserSessions";
import { UserApi } from "../api/types/UserApi";
import { UserGatewayApi } from "./userGatewayApi";
import { UserPerformanceApi } from "../api/types/UserPerformanceApi";
import { UserPerformance } from "../../domain/types/UserPerformance";
import { UserSessionsApi } from "../api/types/UserSessionsApi";
import { User } from "../../domain/types/User";
import { UserActivityModel } from "../../domain/models/UserActivityModel";
import { UserModel } from "../../domain/models/UserModel";
import { UserSessionsModel } from "../../domain/models/UserSessionsModel";
import { UserPeformanceModel } from "../../domain/models/UserPerformanceModel";
import { UserActivityApi } from "../api/types/UserActivityApi";

export class ApiUser implements UserGatewayApi {
    async getUser({ userId }: { userId: number }): Promise<User> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`);
        }
        const { data }: { data: UserApi } = await response.json();

        return new UserModel(data);
    }

    async getActivity({ userId }: { userId: number }): Promise<UserActivity> {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`);
        }
        const { data }: { data: UserActivityApi } = await response.json();

        return new UserActivityModel(data);
    }

    async getPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const {data} : {data: UserPerformanceApi} = await response.json();

        return new UserPeformanceModel(data)
    }

    async getSessions({ userId }: { userId: number }): Promise<UserSessions> {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const {data} : {data: UserSessionsApi} = await response.json();

        return new UserSessionsModel(data)
    }
}