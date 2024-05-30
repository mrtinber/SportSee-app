import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { UserActivity } from "../../domain/models/UserActivity";

type BarChartComponentProps = {
    data: UserActivity;
}

export function BarChartComponent({ data }: BarChartComponentProps) {

    const formatXAxisTick = (tick: number) => (tick + 1).toString();

    return (
        <>
        <div className="content_container_charts_activity_title">Activité quotidienne</div>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data.sessions} barGap={8}>
                <YAxis dataKey="calories" yAxisId="left" hide />
                <YAxis dataKey="kilogram" yAxisId="right" orientation="right" domain={['dataMin - 1', 'dataMax + 1']} tickCount={3} axisLine={false} tickLine={false} stroke="#9B9EAC" tickMargin={30} />
                <XAxis tickLine={false} stroke="#9B9EAC" tickMargin={15} tickFormatter={formatXAxisTick} />
                <CartesianGrid strokeDasharray="3 2" vertical={false} stroke="#c4c4c4" opacity={0.5} />
                <Tooltip content={<CustomTooltip />} offset={30} />
                <Legend verticalAlign="top" iconType="circle" iconSize={8} align="right" height={80} />
                <Bar yAxisId="right" dataKey="kilogram" fill="#282d30" name="Poids (kg)" barSize={8} radius={[20, 20, 0, 0]}/>
                <Bar yAxisId="left" dataKey="calories" fill="#e60000" name="Calories brûlées (kCal)" barSize={8} radius={[20, 20, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
        </>
    )
}

type CustomTooltipProps = {
    active?: boolean;
    payload?: { value: number }[];
    label?: string;
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p className="tooltip_content">{`${payload[0].value}kg`}</p>
                <p className="tooltip_content">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
    return null;
};