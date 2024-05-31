import { UserSessionsApi } from "../models/UserSessionsApi";

const daysMap: { [key: number]: string } = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
};

export function transformSessionsData(data: UserSessionsApi) {
    const transformedSessions = data.sessions.map(session => ({
        ...session,
        day: daysMap[session.day]
    }));
    
    return {
        userId: data.userId,
        sessions: transformedSessions
    }
}