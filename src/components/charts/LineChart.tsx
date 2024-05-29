import { ResponsiveContainer, XAxis, Tooltip, LineChart, Line, Legend, Rectangle, YAxis } from "recharts"
import { useState, useEffect } from "react"
import { getSessions } from "../../usecases/getSessions";
import { UserSessions } from "../../variables/types";

const daysMap: { [key: number]: string } = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
};

type LineChartComponentProps = {
    userId: number;
}

export function LineChartComponent({ userId }: LineChartComponentProps) {
    const [data, setData] = useState<UserSessions | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userSessions = await getSessions({userId});
                setData(userSessions);
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

    const sessionWithLetters = data.sessions.map(session => ({
        ...session,
        day: daysMap[session.day]
    }))

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={400} data={sessionWithLetters} margin={{
                top: 0,
                right: 20,
                left: 20,
                bottom: 15,
            }}>
                <XAxis dataKey="day" stroke="#fff" axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 'dataMax + 20']}/>
                <Legend content={renderLegend} />
                <Tooltip content={<CustomTooltip />} cursor={<CustomCursor points={[{ x: 0, y: 0 }, { x: 0, y: 0 }]} width={500} height={400} stroke="#ff0000" />} />

                <Line dataKey='sessionLength' type="monotone" stroke="#ffffff" strokeWidth={2} dot={false}/>
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

// Est-ce qu'on a vraiment besoin des props ici?
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
