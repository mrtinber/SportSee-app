import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

type RadialChartComponentProps = {
    todayScore: number
}


export function RadialChartComponent({ todayScore }: RadialChartComponentProps) {

    const chartData = [{ name: "TodayScore", uv: todayScore }];
    console.log(chartData)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart width={730}
                height={250}
                innerRadius="70%"
                outerRadius="80%"
                startAngle={0}
                data={chartData}
                endAngle={360}>
                    <RadialBar background dataKey='uv'/>
                </RadialBarChart>
        </ResponsiveContainer>
    )
}