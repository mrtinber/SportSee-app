import { UserGateway } from "../../domain/userGateway";
import { BASE_URL } from "../../variables/constants";
import { User } from "../../domain/models/User";
import { UserActivity } from "../../domain/models/UserActivity";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { UserSessions } from "../../domain/models/UserSessions";

export class ApiUser implements UserGateway {
    async getUser({ userId }: { userId: number }): Promise<User> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const result = await response.json();
        return result.data
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
        const result = await response.json();
        return result.data
    }

    async getSessions({ userId }: { userId: number }): Promise<UserSessions> {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Network issue: ${response.status}`)
        }
        const result = await response.json();
        return result.data
    }
}