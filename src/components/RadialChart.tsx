import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

type RadialChartComponentProps = {
    todayScore: number
}


export function RadialChartComponent({ todayScore }: RadialChartComponentProps) {

    const chartData = [{ name: "TodayScore", uv: todayScore * 100, max: 100 }];
    console.log(chartData)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart width={730}
                height={250}
                innerRadius="60%"
                outerRadius="90%"
                startAngle={180}
                data={chartData}
                endAngle={-180}
            >
                <RadialBar background dataKey='max' fill="#fff" />
                <RadialBar dataKey='uv' fill="red" />
                <Legend content={renderLegend} />

            </RadialBarChart>
        </ResponsiveContainer>
    )
}

const renderLegend = () => {
    return <p className="chart_score_title">Score</p>
}