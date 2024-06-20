import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line, Legend, Rectangle, YAxis } from "recharts"
import { useFetchSessions } from "../../hooks/useFetchSessions";

type LineChartSessionsProps = {
    userId: number;
}

export function LineChartSessions({ userId }: LineChartSessionsProps) {
    const { sessionsData, isLoading, error } = useFetchSessions(userId)

    if (isLoading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Oups! Quelque chose n'a pas fonctionné!</div>
    }

    if (!sessionsData) {
        return <div>Aucune donnée trouvée</div>;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={400} data={sessionsData.sessions} margin={{
                top: 0,
                right: -10,
                left: -10,
                bottom: 15,
            }}>
                <XAxis dataKey="day" stroke="#fff" axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 'dataMax + 20']} padding={{ bottom: 25 }} />
                <Legend content={renderLegend} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor points={[{ x: 0, y: 0 }, { x: 0, y: 0 }]} width={500} height={400} stroke="#ff0000" />} />

                <Line dataKey='sessionLength' type='natural' stroke="#ffffff" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
};

const renderLegend = () => {
    return <p className="chart_average_title">Durée moyenne des <br /> sessions</p>
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
                <p className="tooltip_content">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

type CustomCursorProps = {
    points: { x: number, y: number }[];
    width: number;
    height: number;
    stroke: string;
};

const CustomCursor = ({ points, width, height, stroke }: CustomCursorProps) => {
    const { x, y } = points[0];
    return (
        <Rectangle
            fill="#000"
            stroke={stroke}
            x={x}
            y={y}
            width={width}
            height={height}
            fillOpacity={0.1}
        />
    );
};
