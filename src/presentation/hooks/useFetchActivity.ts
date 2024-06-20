import { useEffect, useState } from "react";
import { getActivity } from "../../application/usecases/getActivity";
import { UserActivity } from "../../domain/types/UserActivity";

export function useFetchActivity(userId: number) {

    const [activityData, setActivityData] = useState<UserActivity | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userActivity = await getActivity({ userId });
                setActivityData(userActivity);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchData();
    }, [userId]);
    
    return {activityData, isLoading, error}
}