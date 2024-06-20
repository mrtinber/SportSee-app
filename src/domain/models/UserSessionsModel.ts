import { UserSessionsApi } from "../../infra/api/types/UserSessionsApi";
import { UserSession } from "../types/UserSessions";

export class UserSessionsModel {
    userId: number;
    sessions: UserSession[];

    /**
     * Create user sessions data model.
     * @param {UserSessionsApi} data - The data value
     */
    constructor(data: UserSessionsApi) {
        this.userId = data.userId;
        this.sessions = this.transformSessionsData(data);
    }

    /**
     * Transform the sessions data from the API.
     * @param {UserSessionsApi} data - The data value from API
     * @return {UserSession[]} The transformed sessions
     */
    private transformSessionsData(data: UserSessionsApi): UserSession[] {
        const daysMap: { [key: number]: string } = {
            1: 'L',
            2: 'M',
            3: 'M',
            4: 'J',
            5: 'V',
            6: 'S',
            7: 'D'
        };

        const transformedSessions = data.sessions.map(session => ({
            ...session,
            day: daysMap[session.day]
        }));

        const dummySessionStart: UserSession = {
            day: '',
            sessionLength: 30 
        };

        const dummySessionEnd: UserSession = {
            day: '',
            sessionLength: 30
        };

        // Add dummy data to the beginning and end
        transformedSessions.unshift(dummySessionStart);
        transformedSessions.push(dummySessionEnd);

        return transformedSessions;
    }
}