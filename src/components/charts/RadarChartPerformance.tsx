import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { useFetchPerformance } from "../../hooks/useFetchPerformance";

type RadarChartPerformanceProps = {
    userId: number;
}

export function RadarChartPerformance({ userId }: RadarChartPerformanceProps) {
    const {performanceData, isLoading, error} = useFetchPerformance(userId)

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Oups! Quelque chose n'a pas fonctionné!</div>
    }

    if (!performanceData) {
        return <div>Aucune donnée trouvée</div>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={performanceData.data} startAngle={30} endAngle={-330}>
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis dataKey='kind' stroke="#fff" />
                <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}