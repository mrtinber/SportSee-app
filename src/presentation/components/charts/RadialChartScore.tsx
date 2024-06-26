import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

type RadialChartScoreProps = {
    todayScore: number
}

export function RadialChartScore({ todayScore }: RadialChartScoreProps) {

    const chartData = [{ name: "TodayScore", uv: todayScore * 100, max: 100 }];

    return (
        <>
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
                <RadialBar dataKey='uv' fill="red" cornerRadius={50}/>
                <Legend content={renderLegend} />

            </RadialBarChart>
        </ResponsiveContainer>
        <div className="chart_score_info">
            <p><span>{chartData[0].uv}% </span> <br/> de votre objectif</p>
        </div>
        </>
    )
}

const renderLegend = () => {
    return <p className="chart_score_title">Score</p>
}