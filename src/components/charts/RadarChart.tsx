import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { transformPerformanceData } from "../../domain/utils/transformPerformanceData";

type RadarChartComponentProps = {
    data: UserPerformance;
}

export function RadarChartComponent({ data }: RadarChartComponentProps) {
    const convertedData = transformPerformanceData(data);

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