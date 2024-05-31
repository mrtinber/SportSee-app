import { BASE_URL } from "../../variables/constants";
import { UserActivity } from "../../domain/models/UserActivity";
import { UserSessions } from "../../domain/models/UserSessions";
import { UserApi } from "./models/UserApi";
import { UserGatewayApi } from "./userGatewayApi";
import { normalizeScore } from "./mappers/normalizeScore";
import { UserPerformanceApi } from "./models/UserPerformanceApi";
import { transformPerformanceData } from "./mappers/transformPerformanceData";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { transformSessionsData } from "./mappers/transformSessionsData";
import { UserSessionsApi } from "./models/UserSessionsApi";
import { User } from "../../domain/models/User";

export class ApiUser implements UserGatewayApi {
    async getUser({ userId }: { userId: number }): Promise<User> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`);
        }
        const { data }: { data: UserApi } = await response.json();

        return normalizeScore(data);
    }

    async getActivity({ userId }: { userId: number }): Promise<UserActivity> {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const result = await response.json();
        return result.data
    }

    async getPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const {data} : {data: UserPerformanceApi} = await response.json();

        return transformPerformanceData(data)
    }

    async getSessions({ userId }: { userId: number }): Promise<UserSessions> {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const {data} : {data: UserSessionsApi} = await response.json();

        return transformSessionsData(data)
    }
}