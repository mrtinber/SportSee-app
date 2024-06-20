import { useEffect, useState } from "react";
import { getUser } from "../../application/usecases/getUser";
import { User } from "../../domain/types/User";

export function useFetchUser(userId: number) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userData = await getUser({ userId });
                setUser(userData);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {user, isLoading, error}
}