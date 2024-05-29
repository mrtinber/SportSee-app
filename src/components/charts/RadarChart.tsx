import { useEffect, useState } from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { getPerformance } from "../../usecases/getPerformance";
import { UserPerformance } from "../../variables/types";

type RadarChartComponentProps = {
    userId: number;
}

export function RadarChartComponent({ userId }: RadarChartComponentProps) {
    const [data, setData] = useState<UserPerformance | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getPerformance({userId});
                setData(userData);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false)
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

    if (!data) {
        return <div>Aucune donnée trouvée</div>;
    }

    const convertedData = data.data.map(item => ({
        value: item.value,
        kind: data.kind[item.kind].charAt(0).toUpperCase() + data.kind[item.kind].slice(1)
    }));

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={convertedData}>
                <PolarGrid gridType="polygon" radialLines={false}/>
                <PolarAngleAxis dataKey="kind" stroke="#fff"/>
                <Radar dataKey="value" fill="#ff0101" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    )
}