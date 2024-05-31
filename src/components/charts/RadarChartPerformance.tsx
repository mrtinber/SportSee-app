import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { transformPerformanceData } from "../../domain/utils/transformPerformanceData";
import { useEffect, useState } from "react";
import { getPerformance } from "../../domain/usecases/getPerformance";

type RadarChartPerformanceProps = {
    userId: number;
}

export function RadarChartPerformance({ userId }: RadarChartPerformanceProps) {
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

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Oups! Quelque chose n'a pas fonctionné!</div>
    }

    if (!performanceData) {
        return <div>Aucune donnée trouvée</div>;
    }

    const convertedData = transformPerformanceData(performanceData);

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={convertedData} startAngle={30} endAngle={-330}>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis dataKey="kind" stroke="#fff" />
                <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}