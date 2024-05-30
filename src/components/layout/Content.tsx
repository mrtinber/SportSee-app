//React
import { useEffect, useState } from "react"

//Components
import { Aside } from "./Aside";

//Charts
import { LineChartComponent } from "../charts/LineChart";
import { RadarChartComponent } from "../charts/RadarChart";
import { BarChartComponent } from "../charts/BarChart";
import { RadialChartComponent } from "../charts/RadialChart";

// Usecases
import { getUser } from "../../domain/usecases/getUser";
import { getPerformance } from "../../domain/usecases/getPerformance";
import { getSessions } from "../../domain/usecases/getSessions";
import { getActivity } from "../../domain/usecases/getActivity";

//Models
import { User } from "../../domain/models/User";
import { UserPerformance } from "../../domain/models/UserPerformance";
import { UserSessions } from "../../domain/models/UserSessions";
import { UserActivity } from "../../domain/models/UserActivity";

// Utils
import { scoreInPercentage } from "../../domain/utils/scoreInPercentage";

export function Content() {
    const [data, setData] = useState<User | null>(null)
    const [performanceData, setPerformanceData] = useState<UserPerformance | null>(null)
    const [sessionsData, setSessionsData] = useState<UserSessions | null>(null)
    const [activityData, setActivityData] = useState<UserActivity | null>(null)
    const [userId, setUserId] = useState(12)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userData = await getUser({ userId });
                setData(userData);
                const userPerformance = await getPerformance({ userId });
                setPerformanceData(userPerformance);
                const userSessions = await getSessions({ userId });
                setSessionsData(userSessions);
                const userActivity = await getActivity({ userId });
                setActivityData(userActivity);
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

    if (!data || !performanceData || !sessionsData || !activityData) {
        return <div>Aucune donnée trouvée</div>;
    }

    function handleChangeUser() {
        if (userId === 12) {
            setUserId(18);
        } else {
            setUserId(12);
        }
    };

    const normalizedScore = scoreInPercentage(data)

    return <div className="content">
        <div className='content_welcome'>
            <h1>Bonjour <span>{data.userInfos.firstName}</span></h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
            <button onClick={handleChangeUser}>Changer d'utilisateur</button>
        </div>
        <div className="content_container">
            <div className="content_container_charts">
                <div className="content_container_charts_activity">
                    <BarChartComponent data={activityData} />
                </div>
                <div className="content_container_charts_row">
                    <div className="chart_average">
                        <LineChartComponent data={sessionsData} />
                    </div>
                    <div className="chart_performance">
                        <RadarChartComponent data={performanceData} />
                    </div>
                    <div className="chart_score">
                        <RadialChartComponent todayScore={normalizedScore} />
                    </div>
                </div>
            </div>
            <Aside
                calories={data.keyData.calorieCount}
                proteins={data.keyData.proteinCount}
                carbs={data.keyData.carbohydrateCount}
                lipids={data.keyData.lipidCount}
            />
        </div>
    </div>
}