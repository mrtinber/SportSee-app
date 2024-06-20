import { useEffect, useState } from "react";
import { getPerformance } from "../../application/usecases/getPerformance";
import { UserPerformance } from "../../domain/types/UserPerformance";

export function useFetchPerformance(userId: number) {
    const [performanceData, setPerformanceData] = useState<UserPerformance | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const userPerformance = await getPerformance({ userId });
                setPerformanceData(userPerformance);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {performanceData, isLoading, error}
}