import { useEffect, useState } from "react";
import { getSessions } from "../domain/usecases/getSessions";
import { UserSessions } from "../domain/models/UserSessions";

export function useFetchSessions(userId: number) {
    const [sessionsData, setSessionsData] = useState<UserSessions | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userSessions = await getSessions({ userId });
                setSessionsData(userSessions);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {sessionsData, isLoading, error}
}